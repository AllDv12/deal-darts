# Deal Darts - Discover the Hottest Online Deals

![Deal Darts](./public/hero-background.jpg)

Deal Darts is a modern web application that aggregates the best deals from various online retailers, helping users find amazing discounts all in one place.

## Features

- **Real-time Deal Updates**: Get the latest deals as they become available
- **Verified Deals**: All deals are checked for authenticity
- **Price Comparison**: Compare prices across multiple stores
- **Deal Filters**: Filter by category, store, discount percentage, and more
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Modern UI**: Built with a clean, elegant user interface

## Technologies Used

This project is built with modern web technologies:

- **React** - Front-end library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable UI components

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```sh
# Clone the repository
git clone https://github.com/AllDv12/deal-darts

# Navigate to the project directory
cd deal-darts

# Install dependencies
npm install
# or with yarn
yarn install

# Start the development server
npm run dev
# or with yarn
yarn dev
```

The application will be available at `http://localhost:5173`.

## Project Structure

```
deal-darts/
├── public/              # Static assets
├── src/
│   ├── components/      # UI components
│   ├── data/            # Mock data and data utilities
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Deployment

To build the application for production:

```sh
# Build the application
npm run build
# or with yarn
yarn build
```

The build artifacts will be stored in the `dist/` directory, ready to be deployed to any static hosting service.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons from [Lucide Icons](https://lucide.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
