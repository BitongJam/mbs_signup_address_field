# Odoo Module: MBS Signup Address Fields

This module is extended of signup_address_fields_fl1 module.

---
How to Setup Google Places on the Field Street
## 1. Create a Google Maps API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one.
3. Enable the following APIs:
   - **Maps JavaScript API**
   - **Places API**
4. Create an API Key:
   - Navigate to **APIs & Services → Credentials → Create Credentials → API Key**
5. (Optional) Restrict the key to your domain(s) and the above APIs.

---

## 2. Add the API Key to Odoo Settings

This module uses `res.config.settings` to store your Google API key.

1. Go to **Settings → General Settings**.
2. Locate the field **Google Maps API Key**.
3. Paste your API key and save.

> 💡 **Note:**  
> Ensure your key is active and has permissions for both the *Maps JavaScript API* and *Places API*.  
> Without proper configuration, the street autocomplete feature will not function.

---

## 3. Test the Signup Form

1. Navigate to your **signup page**.
2. Begin typing an address in the **street field**.
3. Verify that Google autocomplete suggestions appear.
4. Confirm that **phone formatting** and **company type** logic still behave as expected.

---

## 4. Troubleshooting

- If autocomplete suggestions do not appear:
  - Open your browser’s console and check for JavaScript errors.
  - Verify that the API key is correctly stored under  
    **Settings → General Settings → Google Place API**.
  - Confirm that both APIs (*Maps JavaScript API* and *Places API*) are enabled in your Google Cloud project.

---

## 🧩 Technical Notes

- The module adds a configurable field for the Google API key using `res.config.settings`.
- The signup form uses the key to load Google’s Places Autocomplete JavaScript.
- Ensure your custom signup controller and view templates are correctly linked.

---
