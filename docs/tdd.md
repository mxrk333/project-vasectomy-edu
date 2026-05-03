### Technical Design Document (TDD)

**1. Tech Stack**

- **Framework:** Next.js (Static Site Generation - SSG) for lightning-fast speeds and SEO.
- **Styling:** Tailwind CSS (for easy implementation of Light/Dark mode and responsiveness).
- **Hosting:** **Vercel** (Automated deployment from GitHub).
- **File Storage:** **UploadThing** (To host and serve the downloadable PDF resources).
- **Form Handling:** **FormSubmit** (Zero-code backend for the contact and feedback forms).

**2. System Architecture (Frontend Heavy)**
Since there is **no backend**, the flow is:

- **User -> Frontend (Vercel) -> FormSubmit -> Nursing Team Email.**
- **User -> Frontend (Vercel) -> UploadThing CDN -> PDF Download.**

**3. Integration Plan**

- **FormSubmit Implementation:**
  The contact form will point its action attribute to the FormSubmit endpoint:
  ```html
  <form
    action="https://formsubmit.co/your-nursing-team-email@email.com"
    method="POST"
  >
    <input type="text" name="name" required />
    <button type="submit">Send Feedback</button>
  </form>
  ```

```

*   **UploadThing Implementation:**
    Use your API key from the provided dashboard to set up the `FileRouter`. This will allow the nursing students to upload new brochures through your dev environment which then get served as permanent links on the "Resources" page.

*   **Dark/Light Mode:**
    Implemented using `next-themes` to toggle between a clean "Day" mode (Professional) and a "Night" mode (Easier on the eyes for late-night reading).

**4. Component Breakdown**
1.  **Navigation:** Sticky header with language toggle (EN/PH).
2.  **Hero:** Large, welcoming illustration with the tagline.
3.  **Educational Grid:** Cards explaining the procedure.
4.  **Comparison Table:** Side-by-side Myths vs. Facts.
5.  **Resource Gallery:** Download buttons linked to UploadThing files.
6.  **Footer:** Barangay San Isidro contact info and FormSubmit fields.

**5. Deployment Workflow**
1.  Push code to the GitHub repo: `cutting-ties-keeping-love`.
2.  Connect repo to **Vercel**.
3.  Add `UPLOADTHING_SECRET` and `UPLOADTHING_APP_ID` to Vercel Environment Variables.
4.  Deploy.
```
