import { useEffect, useState } from 'react';
import SquareButton from '../../components/SquareButton';
import './Users.css';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:8000/api/users';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error('Erro ao carregar utilizadores:', err);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function startCreate() {
    setEditingId(null);
    setFormData({ name: '', email: '', password: '' });
    setShowForm(true);
  }

  function startEdit(user) {
    setEditingId(user.id);
    setFormData({ name: user.name, email: user.email, password: '' });
    setShowForm(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const isEditing = editingId !== null;
    const url = isEditing ? `${API_URL}/${editingId}` : API_URL;
    const method = isEditing ? 'PUT' : 'POST';

    const payload = { ...formData };
    if (isEditing && !payload.password) {
      delete payload.password;
    }

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Falha ao guardar utilizador');

      setShowForm(false);
      setFormData({ name: '', email: '', password: '' });
      setEditingId(null);
      loadUsers();
    } catch (err) {
      console.error(err);
      alert('Não foi possível guardar o utilizador.');
    }
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm('Tens a certeza que queres remover este utilizador?');
    if (!confirmDelete) return;

    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      loadUsers();
    } catch (err) {
      console.error(err);
      alert('Não foi possível remover o utilizador.');
    }
  }

  return (
    <main className="users-page">
      <div className="users-page__header">
        <h1>Gestão de Utilizadores</h1>
        <SquareButton variant="dark" onClick={startCreate}>
          Novo Utilizador
        </SquareButton>
      </div>

      {loading ? (
        <p>A carregar...</p>
      ) : (
        <table className="users-page__table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="users-page__actions">
                  <SquareButton onClick={() => startEdit(user)}>Editar</SquareButton>
                  <SquareButton onClick={() => handleDelete(user.id)}>Remover</SquareButton>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="3">Nenhum utilizador encontrado.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {showForm && (
        <div className="users-page__modal-overlay" onClick={() => setShowForm(false)}>
          <form
            className="users-page__form"
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit}
          >
            <h2>{editingId ? 'Editar Utilizador' : 'Novo Utilizador'}</h2>

            <div className="users-page__field">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                maxLength={150}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="users-page__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                maxLength={150}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="users-page__field">
              <label htmlFor="password">
                {editingId ? 'Nova password (opcional)' : 'Password'}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                minLength={6}
                value={formData.password}
                onChange={handleChange}
                required={!editingId}
              />
            </div>

            <div className="users-page__form-actions">
              <SquareButton variant="dark" onClick={handleSubmit}>
                Guardar
              </SquareButton>
              <SquareButton onClick={() => setShowForm(false)}>Cancelar</SquareButton>
            </div>
          </form>
        </div>
      )}
    </main>
  );
}