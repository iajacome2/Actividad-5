// Componente Contenedor
class MyLayout extends HTMLElement {
    constructor() {
        super();
        // Crear Shadow DOM
        this.attachShadow({ mode: 'open' });
        // Definir la estructura del componente contenedor con slots y clases de Bootstrap
        this.shadowRoot.innerHTML = `
        <div class="container">
          <slot name="header" class="mb-4"></slot>
          <slot name="main"></slot>
          <slot name="footer" class="mt-4"></slot>
          <slot name="form" class="mt-4"></slot>
        </div>
      `;
    }
}

// Registrar el componente contenedor
customElements.define('my-layout', MyLayout);

// Componente de Encabezado
class MyHeader extends HTMLElement {
    constructor() {
        super();
        // Crear Shadow DOM
        this.attachShadow({ mode: 'open' });
        // Definir la estructura del componente de encabezado con clases de Bootstrap
        this.shadowRoot.innerHTML = `
        <header class="bg-primary text-white p-3">
          <h1>¡Bienvenido a mi Slots!</h1>
        </header>
      `;
    }
}

// Registrar el componente de encabezado
customElements.define('my-header', MyHeader);

// Componente de Lista
class MyList extends HTMLElement {
    constructor() {
        super();
        // Crear Shadow DOM
        this.attachShadow({ mode: 'open' });
        // Definir la estructura del componente de lista con clases de Bootstrap
        this.shadowRoot.innerHTML = `
        <ul class="list-group">
          <li class="list-group-item">Universidad de las Fuerzas Armadas ESPE</li>
          <li class="list-group-item">Programacion Integrativa de Componentes WEB</li>
          <li class="list-group-item">14386</li>
        </ul>
      `;
    }
}

// Registrar el componente de lista
customElements.define('my-list', MyList);

// Componente de Formulario
class MyForm extends HTMLElement {
    constructor() {
        super();
        // Crear Shadow DOM
        this.attachShadow({ mode: 'open' });
        // Definir la estructura del componente de formulario con clases de Bootstrap y slots
        this.shadowRoot.innerHTML = `
            <form class="mt-3">
                <div class="mb-3">
                    <label for="username" class="form-label">Nombre de usuario:</label>
                    <slot name="username-input">
                        <input type="text" class="form-control" id="username" name="username" placeholder="Ingresa tu nombre de usuario" required>
                    </slot>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña:</label>
                    <slot name="password-input">
                        <input type="password" class="form-control" id="password" name="password" placeholder="Ingresa tu contraseña" required>
                    </slot>
                </div>
                <div class="mb-3 form-check">
                    <slot name="remember-me-checkbox">
                        <input type="checkbox" class="form-check-input" id="rememberMe">
                        <label class="form-check-label" for="rememberMe">Recuérdame</label>
                    </slot>
                </div>
                <slot name="submit-button">
                    <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                </slot>
            </form>
        `;
    }
}

// Registrar el componente de formulario
customElements.define('my-form', MyForm);
