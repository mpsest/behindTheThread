import { useState } from 'react';
import SquareButton from './SquareButton.jsx';
import './MisturasForm.css';

const AREAS = [
  'Vestuário', 'Calçado', 'Fotografia', 'Vídeo', 'Acessórios',
  'Joalharia', 'Instalações', 'Eventos', 'Outros',
];

export default function MisturasForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    creator: '', projectName: '', description: '', regime: '',
    location: '', area: [], startDate: '', duration: '',
    budget: '', numCollaborators: '', email: '', phone: '',
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function toggleRegime(value) {
    setFormData({ ...formData, regime: formData.regime === value ? '' : value });
  }

  function toggleArea(value) {
    setFormData((prev) => ({
      ...prev,
      area: prev.area.includes(value)
        ? prev.area.filter((a) => a !== value)
        : [...prev.area, value],
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.(formData);
  }

  return (
    <form className="collab-form" onSubmit={handleSubmit}>
      <div className="collab-form__field">
        <label htmlFor="creator">Criador do projeto*</label>
        <input id="creator" name="creator" type="text" placeholder="Marca ou Designer"
          value={formData.creator} onChange={handleChange} required />
      </div>

      <div className="collab-form__field">
        <label htmlFor="projectName">Nome do projeto*</label>
        <input id="projectName" name="projectName" type="text" placeholder="Marca ou Designer"
          value={formData.projectName} onChange={handleChange} required />
      </div>

      <div className="collab-form__field">
        <label htmlFor="description">Descrição*</label>
        <input id="description" name="description" type="text" placeholder="Explicação do conceito e objetivo"
          value={formData.description} onChange={handleChange} required />
      </div>

      <div className="collab-form__field">
        <label>Regime</label>
        <div className="collab-form__pills">
          <button type="button" className={`pill ${formData.regime === 'presencial' ? 'pill--selected' : ''}`}
            onClick={() => toggleRegime('presencial')}>Presencial</button>
          <button type="button" className={`pill ${formData.regime === 'remoto' ? 'pill--selected' : ''}`}
            onClick={() => toggleRegime('remoto')}>Remoto</button>
        </div>
      </div>

      <div className="collab-form__field">
        <label htmlFor="location">Localização (caso seja presencial)</label>
        <input id="location" name="location" type="text" placeholder="Porto"
          value={formData.location} onChange={handleChange} />
      </div>

      <div className="collab-form__field">
        <label>Área</label>
        <div className="collab-form__pills">
          {AREAS.map((area) => (
            <button key={area} type="button"
              className={`pill ${formData.area.includes(area) ? 'pill--selected' : ''}`}
              onClick={() => toggleArea(area)}>
              {area}
            </button>
          ))}
        </div>
      </div>

      <div className="collab-form__field">
        <label htmlFor="startDate">Data de começo*</label>
        <input id="startDate" name="startDate" type="text" placeholder="a partir de 22 de março"
          value={formData.startDate} onChange={handleChange} required />
      </div>

      <div className="collab-form__field">
        <label htmlFor="duration">Duração*</label>
        <input id="duration" name="duration" type="text" placeholder="2 meses ou 2 semanas"
          value={formData.duration} onChange={handleChange} required />
      </div>

      <div className="collab-form__field">
        <label htmlFor="budget">Orçamento (caso haja)</label>
        <input id="budget" name="budget" type="text" placeholder="500 €"
          value={formData.budget} onChange={handleChange} />
      </div>

      <div className="collab-form__field">
        <label htmlFor="numCollaborators">Número de colaboradores<br />(caso haja limite)</label>
        <input id="numCollaborators" name="numCollaborators" type="text" placeholder="5"
          value={formData.numCollaborators} onChange={handleChange} />
      </div>

      <div className="collab-form__field">
        <label htmlFor="email">Email*</label>
        <input id="email" name="email" type="email" placeholder="nome@gmail.com"
          value={formData.email} onChange={handleChange} required />
      </div>

      <div className="collab-form__field">
        <label htmlFor="phone">Telemóvel*</label>
        <input id="phone" name="phone" type="tel" placeholder="nome@gmail.com"
          value={formData.phone} onChange={handleChange} required />
      </div>

      <div className="collab-form__submit">
        <SquareButton variant="dark">Submeter</SquareButton>
      </div>
    </form>
  );
}