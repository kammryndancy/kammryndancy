# Kammryndancy.com Frontend

Kammryndancy.com is the Angular frontend for the Kammryndancy brewing and scavenger hunt platform. It provides a modern, mobile-friendly web interface for exploring beer recipes, managing scavenger hunt items, and interacting with the backend API.

## Getting Started

### Development Server
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the dev server:
   ```sh
   ng serve
   ```
   Navigate to [http://localhost:4200/](http://localhost:4200/). The app will reload on code changes.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Environment Configuration
- Edit `src/environments/environment.ts` to set the API URL and any frontend keys.
- The frontend expects a running backend API (see `../kammryndancyAPI`).

### Testing
- Run `ng test` to execute unit tests via [Karma](https://karma-runner.github.io).
- Run `ng e2e` for end-to-end tests (if configured).

## Page Descriptions

- **Home Page:**
  - Welcome page introducing the Kammryndancy platform and its main features. Provides navigation to beer recipes and scavenger hunt sections.

- **Beer Recipes Page:**
  - Browse a curated list of homebrew beer recipes, each with details like malts, hops, yeast, ABV, SRM, IBU, and more.
  - Search and filter recipes by name or style.
  - View recipe details, including images, instructions, and external links.
  - (If authorized) Add, edit, or delete recipes.

- **Scavenger Hunt Page:**
  - Explore a database of plants, animals, and insects suitable for scavenger hunts.
  - Generate random scavenger hunt lists filtered by category or season.
  - Search for specific items and view their images and descriptions.
  - (If authorized) Add, edit, or remove scavenger hunt items.

- **Photography Page:**
  - Browse a gallery of nature and brewing-related photographs.
  - View high-quality images, photographer credits, and descriptions.
  - (If authorized) Upload new photos or manage the gallery.

- **Admin/Management Pages:**
  - Restricted to authorized users. Manage beer recipes and scavenger hunt items.
  - Access logs, perform batch imports, or trigger data refreshes (if enabled).

- **About Page:**
  - Information about the Kammryndancy project, its creators, and links to related resources.

- **Error/Not Found Page:**
  - Friendly error messages for invalid routes or API errors.

## Project Structure
- `src/app/beer-recipes/` — Beer recipe components and services
- `src/app/scavenger-hunt/` — Scavenger hunt components and services
- `src/app/shared/` — Shared UI and utility modules

## Contributing
Pull requests and issues are welcome! Please add tests for new features or bug fixes.

## License
MIT
