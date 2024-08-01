# [fintter](https://fintter.vercel.app/)

## Table Of Content

   - [Features](#Features)
   - [Technologies](#Stack-and-Technologies-Used)
   - [Getting started](#Getting-Started)
   - [Contributing](#Contributing)
   - [License](#License)
   - [Contributors](#Contributors)


 ## Features
![Image1](https://github.com/RafasGit/fintter/blob/main/public/fintterhome.png)

 A financial management platform providing insight into your expenditure and income transactions;


- 📈 Interactive Financial Dashboard: Visualize and manage finances in realtime
- 📊 Financial Analytics: Custom data views with various chart options mapping expenditure and income trends and paterns as well as transaction filters by account or date
- ➕ Account, categories and transaction creation forms for easily adding and deleting transactions. 
- 🗃️ CSV Transaction Imports: Import transactions from CSV files.
- 🔐 Authentication provided by Clerk (Core 2): Secure data access.
- 🔥 Serverless functions and APIs via Hono.js: Type checked, authenticated and efficient APIs.
- 🪝 State Management via Tanstack React Query: Efficient state management for a smooth experience.

 ## Stack and Technologies Used
   - Front-End: NextJs, Zustand, 🎨 TailwindCSS and Shadcn UI.
   - Back-End:  BunJs, TypeScript, 🔥Hono.js. 
   - Database: 💾 PostgreSQL, Drizzle ORM and Neon db

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
bun run dev
# or
yarn dev
# or
pnpm dev
# or
npm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For sample financial data, reach out to [Contributors](#Contributors) for admin access. Run the development server and in your terminal execute the [seed.ts](https://github.com/RafasGit/fintter/blob/main/script/seed.ts) script;

```bash
bun run db:seed
# or
yarn run db:seed
# or
pnpm run db:seed
# or
npm run db:seed
```



This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Contributing

We welcome contributions from the community to enhance DecisionHub. Feel free to submit bug reports, feature requests, or pull requests through the GitHub repository.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).


## Contributors

For any questions or inquiries, please reach out to the development team at [fintter](mailto:joshraphael424@gmail.com)
  
   - GitHub: [@github](https://github.com/RafasGit)
   - Twitter: [@twitter](https://x.com/rafa_codes22)
   - LinkedIn: [LinkedIn](https://www.linkedin.com/in/joshua-ng-ang-a-13158120a)
 
 Enjoy using Fintter!
