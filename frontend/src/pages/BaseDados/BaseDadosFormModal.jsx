import SquareButton from "../../components/SquareButton";

export default function BaseDadosFormModal({
  resource,
  label,
  editingItem,
  formData,
  saving,
  onChange,
  onSubmit,
  onClose,
}) {
  return (
    <div className="base-dados-detail-modal" onClick={onClose}>
      <form
        className="base-dados-detail-form"
        onClick={(event) => event.stopPropagation()}
        onSubmit={onSubmit}
      >
        <h2>
          {editingItem ? "Editar" : "Adicionar"} {label.slice(0, -1)}
        </h2>

        <div className="base-dados-detail-field">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={formData.nome}
            onChange={onChange}
            required
          />
        </div>

        <div className="base-dados-detail-field">
          <label htmlFor="site">Site</label>
          <input
            id="site"
            name="site"
            type="url"
            value={formData.site}
            onChange={onChange}
          />
        </div>

        {resource === "espacos" ? (
          <>
            <div className="base-dados-detail-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={onChange}
              />
            </div>

            <div className="base-dados-detail-field">
              <label htmlFor="localidade">Localidade</label>
              <input
                id="localidade"
                name="localidade"
                type="text"
                value={formData.localidade}
                onChange={onChange}
              />
            </div>
          </>
        ) : (
          <div className="base-dados-detail-field">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={onChange}
              rows="4"
            />
          </div>
        )}

        <div className="base-dados-detail-field">
          <label htmlFor="categoria">Categoria</label>
          <input
            id="categoria"
            name="categoria"
            type="text"
            value={formData.categoria}
            onChange={onChange}
            required
          />
        </div>

        <div className="base-dados-detail-form-actions">
          <SquareButton variant="dark" type="submit" disabled={saving}>
            {saving ? "A guardar..." : "Guardar"}
          </SquareButton>
          <SquareButton onClick={onClose}>Cancelar</SquareButton>
        </div>
      </form>
    </div>
  );
}
