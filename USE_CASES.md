# Use Case Document - QybrrLabs Blog Platform

**Version:** 1.0
**Date:** (Current Date)

## 1. Introduction

This document outlines the primary use cases for the **QybrrLabs** blog platform, covering interactions for both Content Editors managing the site via the Sanity Studio and Readers visiting the public-facing Next.js website.

## 2. Actors

- **Content Editor/Admin:** Responsible for creating, managing, and publishing content using the Sanity Studio.
- **Blog Reader:** Visits the public website to consume blog content.

## 3. Content Editor Use Cases (Sanity Studio)

_(Precondition: Content Editor has access credentials and logs into the Sanity Studio, typically at `/studio` path or `localhost:3333`)_

**UC-ED-01: Create New Blog Post**

1.  Navigate to the "Post" section in the Sanity Studio Desk.
2.  Click "Create new" or similar action.
3.  Fill in the required fields:
    - Title
    - Slug (auto-generates from Title, can be edited)
    - Author (Select from existing Authors via reference)
    - Main Image (Upload or select image, set Alt Text, define Hotspot)
    - Categories (Select one or more from existing Categories via reference)
    - Published At (Defaults to now, can be set)
    - Body (Use the Portable Text editor to add text, headings, lists, images, code blocks, embeds, tables).
4.  Fill in optional fields:
    - Excerpt
    - Mark as Featured (Boolean checkbox)
5.  Save Draft.
6.  Click "Publish".

**UC-ED-02: Edit Existing Blog Post**

1.  Navigate to the "Post" section.
2.  Select the post to edit from the list.
3.  Modify any fields as needed (Title, Body, Author, Categories, etc.).
4.  Save changes (updates Draft).
5.  Click "Publish" to make changes live.

**UC-ED-03: Manage Categories**

1.  Navigate to the "Category" section.
2.  **Create:** Click "Create new", fill in Title, Slug, select Color, add optional Description, and Publish.
3.  **Edit:** Select an existing category, modify fields, and Publish changes.
4.  **Delete:** Select an existing category and choose the delete action (requires appropriate permissions).

**UC-ED-04: Manage Authors**

1.  Navigate to the "Author" section.
2.  **Create:** Click "Create new", fill in Name, Slug, upload Image, add optional Bio, and Publish.
3.  **Edit:** Select an existing author, modify fields, and Publish changes.
4.  **Delete:** Select an existing author and choose the delete action (requires appropriate permissions).

**UC-ED-05: Update Site Settings**

1.  Navigate to the "Settings" section (likely a singleton document).
2.  Modify fields such as:
    - Site Title
    - Site Description
    - Site URL
    - Logos (Light/Dark)
    - Open Graph Image
    - Copyright holder name
3.  Publish changes.

## 4. Blog Reader Use Cases (Public Website)

_(Precondition: Reader accesses the public website URL)_

**UC-READ-01: Visit Homepage**

1.  Navigate to the website's root URL.
2.  View the latest and/or featured blog posts displayed in a list or grid format.
3.  Identify post titles, images, authors, dates, and categories.

**UC-READ-02: Read a Specific Post**

1.  From the Homepage or any post list (Archive, Category page), click on a post's title or image.
2.  Be navigated to the dedicated page for that post (`/post/[slug]` URL).
3.  View the post's title, metadata (author, date, categories), main image, and full body content.
4.  Scroll through the content.
5.  (If available) View related posts at the end of the article.

**UC-READ-03: Browse by Category**

1.  While viewing a post or post list item, click on a Category label associated with it.
2.  Be navigated to a page listing all posts belonging to that specific category.

**UC-READ-04: View Posts by Author**

1.  While viewing a post or post list item, click on the Author's name.
2.  Be navigated to a page listing all posts written by that specific author.

**UC-READ-05: Navigate via Main Menu**

1.  Click on links in the main navigation bar (e.g., "Home", "About", "Contact", "Archive").
2.  Be navigated to the corresponding page.

**UC-READ-06: Change Theme (Dark/Light Mode)**

1.  Locate the theme switch toggle/icon in the website footer.
2.  Click the toggle.
3.  Observe the website's visual theme change instantly between light and dark modes.
4.  The preference is typically saved for future visits.

**UC-READ-07: View Archive**

1.  Click on the "Archive" link in the main menu.
2.  View a comprehensive list of all published blog posts.

**UC-READ-08: View About Page**

1.  Click on the "About" link in the main menu.
2.  Read the content providing information about the blog or author.

**UC-READ-09: View Contact Page**

1.  Click on the "Contact" link in the main menu.
2.  View contact information or interact with a contact form (if implemented).
