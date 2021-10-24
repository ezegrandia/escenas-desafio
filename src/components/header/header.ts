export function insertHeaderComponent(headerEl) {
  headerEl.innerHTML = `
  <header class="header">
    <div class="header-container">
      <div class="header__logo">
        <p class="header__logo-text">Logo</p>
      </div>
      <form class="header-form">
        <input type="text" class="header__input">
        <input type="submit" class="header-form__button">
      </form>
    </div>
  </header>
  `;
}
