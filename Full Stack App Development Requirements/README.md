# Collaborative Whiteboard

A starter project using Next.js and Supabase for building a collaborative whiteboard.

## How to use

1. **Install dependencies:**
    ```bash
    npm install
    ```

2. **Configure Supabase:**
    - Copy your Supabase project URL and anon key to `.env.local`:
      ```
      NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
      NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
      ```

3. **Start the development server:**
    ```bash
    npm run dev
    ```

4. **Open [`http://localhost:3000`](http://localhost:3000) in your browser.**

## Next steps

- The app currently supports local drawing on a canvas.
- Supabase is already integrated. You can now add real-time features (e.g., syncing drawing data between users).
- For help integrating collaborative features, just ask Copilot!

## File Overview

- `pages/index.js`: Main whiteboard canvas
- `pages/_app.js`: Next.js app wrapper
- `styles/globals.css`: Basic styling
- `.env.local`: Your Supabase credentials (never commit this!)
- `.gitignore`: Common Node/Next/Supabase ignores

---

Need help adding authentication, real-time sync, or deploying? Just ask!