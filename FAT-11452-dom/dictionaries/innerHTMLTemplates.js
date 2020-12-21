export const innerHTMLTemplates = {
  card: ({
    name, type, classis, squad,
  }) => `<h2 class="card__name">
      ${name}
    </h2>
    <div class="card__body">
      <div class="card__heading">
        <h3>Тип:</h3>
        <div class="card__text">
          ${type}
        </div>
      </div>
      <div class="card__heading">
        <h3>Класс:</h3>
        <div class="card__text">
          ${classis}
        </div>
      </div>
      <div class="card__heading">
        <h3>Отряд:</h3>
        <div class="card__text">
          ${squad}
        </div>
      </div>
    </div>`,
  modal: ({ name, description }) => `
    <div class="modal__mask"></div>
    <div class="modal__body">
      <div class="modal__header">
        <h2 class="modal__name">${name}</h2>
        <div class="modal__close">&times;</div>
      </div>
      <div class="modal__description">${description}</div>
    </div>`,
};
