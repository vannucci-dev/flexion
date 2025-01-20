# Flexion

**Flexion** is an AI-powered fitness tracker that leverages the latest technologies in web development and machine learning to provide users with real-time feedback on their workout form. Built with a modern tech stack, Flexion offers a responsive and intuitive interface for tracking fitness progress and enhancing exercise routines.

---

## **Features**

1. **AI Pose Detection:**

   - Uses TensorFlow.js and the MoveNet model for real-time pose detection.
   - Provides immediate feedback on exercise form.
   - Visualises keypoints overlaid on a live video feed.

2. **Custom Workout Plans:**

   - Users can create and customise workout plans based on fitness goals.
   - Step-by-step instructions for each exercise.

3. **Progress Tracking:**

   - Visualise progress with dynamic charts (e.g., calories burned, weekly activity).
   - Logs AI feedback to help users refine their form over time.

4. **Authentication:**

   - Secure login and signup using JWT or NextAuth.js.

5. **Responsive UI:**

   - Fully responsive design for desktop and mobile using Tailwind CSS.

6. **Optional Integrations:**

   - Sync with wearable devices (e.g., Fitbit, Apple Health).
   - Notifications/reminders for scheduled workouts.

---

## **Tech Stack**

### **Frontend:**

- **[Next.js](https://nextjs.org/):**

  - Used for its server-side rendering, static site generation, and API routes.
  - Ensures high performance and SEO optimization.

- **[TensorFlow.js](https://www.tensorflow.org/js):**

  - Integrates the MoveNet model for real-time AI pose detection.

- **Modular CSS**
  - Provides a utility-first approach to styling the app responsively.

### **Backend:**

- **Next.js API Routes:**
  - Handles server-side logic for APIs and authentication.

### **Database:**

- **[PostgreSQL](https://www.postgresql.org/) (via Prisma):**
  - Stores user profiles, workout plans, and feedback logs.

### **Authentication:**

- **[NextAuth.js](https://next-auth.js.org/):**
  - Secure and simple authentication solution.

### **Deployment:**

- **[Vercel](https://vercel.com/):**
  - Deploys the frontend and serverless backend for seamless performance.

---

## **Setup Instructions**

### **Prerequisites:**

- Node.js (v18 or later)
- npm or yarn
- PostgreSQL (local or cloud instance, e.g., Supabase)

### **Installation:**

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/flexion.git
   cd flexion
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env.local` file in the root directory and add:

   ```env
   NEXTAUTH_SECRET=your_secret
   NEXTAUTH_URL=http://localhost:3000
   DATABASE_URL=your_postgresql_connection_string
   ```

4. **Run the App:**

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

### **Build for Production:**

```bash
npm run build
npm start
```

---

## **Roadmap**

- [ ] Add dark mode.
- [ ] Introduce leaderboard functionality.
- [ ] Support additional AI models for other workouts.
- [ ] Implement wearable device integration.

---

## **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgements**

- [TensorFlow.js Team](https://www.tensorflow.org/js) for the MoveNet model.
- [Next.js Community](https://nextjs.org/learn) for their excellent documentation.
- [Tailwind CSS](https://tailwindcss.com/) for making UI development enjoyable.

---

Happy coding and stay fit with **Flexion**!
