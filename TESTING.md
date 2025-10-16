# Testing Guide

This document covers comprehensive testing procedures for the OnePage AI Builder with all current features.

## Testing Overview

The OnePage AI Builder should be tested across the following areas:
- Authentication & Authorization (24h session persistence)
- Project Management (Auto-save, localStorage backup)
- Block System (12 blocks with fixed header/footer)
- Color Customization (WCAG AA contrast checking)
- AI Content Generation
- Export Functionality
- GitHub Deployment
- Stripe Payment Integration
- Access Level System (Basic/Pro/Business)
- UI/UX & Accessibility

## Prerequisites

Before testing:
- Local development server running (`npm run dev`)
- All environment variables configured in `.env`
- Test accounts created in Supabase
- Stripe test mode enabled
- Modern browser (Chrome, Firefox, Safari, Edge latest)

## Manual Testing Checklist

### 1. Authentication & Session Management

#### Registration
- [ ] Can create a new account with valid email/password
- [ ] Cannot register with invalid email format
- [ ] Cannot register with weak password
- [ ] Redirected to dashboard after successful registration
- [ ] Session persists after registration

#### Login
- [ ] Can log in with valid credentials
- [ ] Cannot log in with invalid credentials
- [ ] Shows appropriate error messages
- [ ] Redirected to dashboard after login
- [ ] **Session persists on page reload (F5)**
- [ ] **Session lasts 24 hours without logout**
- [ ] **Auto-refresh token works**

#### Logout
- [ ] Can log out successfully
- [ ] Redirected to login page after logout
- [ ] Cannot access protected routes after logout
- [ ] localStorage cleared on logout

### 2. Dashboard & UI

#### Navigation
- [ ] Dashboard loads correctly
- [ ] **Logo in header links to homepage**
- [ ] Sidebar displays all 12 available blocks
- [ ] Canvas area shows header/content/footer sections
- [ ] Preview pane updates in real-time
- [ ] All buttons and controls are accessible
- [ ] **Access level badges visible on blocks**

#### Landing Page
- [ ] Hero section displays correctly
- [ ] Features section (6 cards with side icons)
- [ ] Blocks showcase (12 blocks)
- [ ] Pricing section (3 tiers)
- [ ] How It Works section
- [ ] Why Choose Us section
- [ ] Footer with proper links
- [ ] All CTAs work correctly

#### Responsive Design
- [ ] Works on desktop (1920x1080)
- [ ] Works on laptop (1366x768)
- [ ] Works on tablet (768px width)
- [ ] Works on mobile (375px width)
- [ ] Navigation collapses on mobile
- [ ] Pricing cards stack properly

### 3. Block Management (12 Blocks)

#### Available Blocks
All 12 blocks should be available:
1. **Hero Section** - Headers with logo, background images
2. **Features Grid** - Feature showcase with icons
3. **Call to Action** - Conversion-focused sections
4. **Pricing Tables** - Multiple plan displays
5. **Testimonials** - Customer reviews
6. **Contact Forms** - User contact sections
7. **Logo Cloud** - Partner/client logo displays (NEW)
8. **Team Section** - Team member profiles (NEW)
9. **Statistics** - Key metrics and numbers (NEW)
10. **FAQ Section** - Q&A displays (NEW)
11. **Newsletter Signup** - Email capture forms (NEW)
12. **Footer** - Site footer with links

#### Fixed Header/Footer Layout
- [ ] Hero block automatically goes to header slot
- [ ] Footer block automatically goes to footer slot
- [ ] Header always stays at top
- [ ] Footer always stays at bottom
- [ ] Content blocks can be arranged in middle section
- [ ] Only one header and one footer allowed

#### Adding Blocks
- [ ] Can drag and drop blocks from sidebar
- [ ] Can click blocks to add them
- [ ] Blocks appear in correct position (header/content/footer)
- [ ] Each block type renders correctly with default content
- [ ] Locked blocks show upgrade prompt (when implemented)

#### Editing Blocks
- [ ] Edit modal opens when clicking edit button
- [ ] All text fields are editable
- [ ] **Color pickers available for all colors**
- [ ] **Contrast validation shows errors for insufficient contrast**
- [ ] **Cannot save blocks with bad contrast ratios**
- [ ] **Logo/background image URLs can be added**
- [ ] Array items (features, plans, FAQs) can be added/removed
- [ ] Changes save correctly
- [ ] Preview updates after saving

#### Block-Specific Content
- [ ] **Hero**: Title, subtitle, button, logo, background image
- [ ] **Features**: Multiple features with icons and descriptions
- [ ] **CTA**: Title, description, button with custom colors
- [ ] **Pricing**: Multiple plans with feature lists
- [ ] **Testimonials**: Multiple testimonials with avatars
- [ ] **Contact**: Form fields with custom styling
- [ ] **Logo Cloud**: Multiple company logos in grid
- [ ] **Team**: Multiple team members with photos, roles, bios
- [ ] **Stats**: Multiple statistics with icons and numbers
- [ ] **FAQ**: Multiple Q&A pairs
- [ ] **Newsletter**: Email signup with success message
- [ ] **Footer**: Company info, links, copyright

#### Deleting Blocks
- [ ] Can delete content blocks
- [ ] Cannot delete header/footer (must replace)
- [ ] Block removed from canvas
- [ ] Preview updates after deletion

#### Reordering Blocks
- [ ] Can move content blocks up/down
- [ ] Cannot move header/footer blocks
- [ ] Order persists correctly
- [ ] Preview reflects new order

### 4. Color Customization & Accessibility

#### Color Pickers
- [ ] Color picker opens for each color field
- [ ] Can select colors via picker
- [ ] Can enter hex codes manually
- [ ] Color preview shows selected color
- [ ] **Real-time contrast checking displays ratio**

#### WCAG AA Contrast Validation
- [ ] Contrast ratio displayed for text/background pairs
- [ ] Warning shown when contrast < 4.5:1
- [ ] **Cannot save block with insufficient contrast**
- [ ] **Validation error message is accessible (role="alert")**
- [ ] All default colors pass WCAG AA (4.5:1 minimum)
- [ ] Button colors validated against button backgrounds

#### Default Colors
All blocks should have WCAG AA compliant defaults:
- [ ] Hero: Dark text on light bg or light on dark
- [ ] Features: Readable text on light background
- [ ] CTA: Light text on dark background (high contrast)
- [ ] All buttons: Minimum 4.5:1 contrast ratio

### 5. Auto-Save & Data Persistence

#### localStorage Backup
- [ ] **Changes saved to localStorage instantly**
- [ ] **Page refresh (F5) restores work automatically**
- [ ] **No popup on restore (silent recovery)**
- [ ] localStorage cleared after successful database save
- [ ] Works in private/incognito mode

#### Auto-Save to Database
- [ ] **Auto-saves every 30 seconds silently**
- [ ] **No UI notifications during auto-save**
- [ ] Only saves when changes detected
- [ ] Works for new projects (creates project ID)
- [ ] Works for existing projects (updates)
- [ ] Doesn't save when no changes

#### Manual Save
- [ ] Manual save button works
- [ ] Shows "✓ Project saved successfully!" message
- [ ] Shows error message on failure
- [ ] Status message is dismissible
- [ ] Status message has close button
- [ ] localStorage cleared after manual save

#### Project Loading
- [ ] Can load saved projects
- [ ] All blocks load correctly
- [ ] Block order preserved (header/content/footer)
- [ ] All customizations preserved
- [ ] Colors and styles intact

### 6. AI Content Generation

#### AI Integration
- [ ] AI button appears next to text fields
- [ ] Clicking AI button generates content
- [ ] Generated content appears in field
- [ ] Shows loading state during generation
- [ ] Handles API errors gracefully
- [ ] Works for different block types
- [ ] Fallback content in development mode

#### Edge Cases
- [ ] Handles slow API responses
- [ ] Handles API failures
- [ ] Shows user-friendly error messages
- [ ] Rate limiting respected (if applicable)

### 7. Export Functionality

#### ZIP Export
- [ ] Export button works
- [ ] ZIP file downloads with project name
- [ ] ZIP contains index.html
- [ ] HTML includes all 12 block types
- [ ] All custom colors applied in export
- [ ] Logos and images included in export
- [ ] Exported site works standalone
- [ ] All blocks render correctly in export

#### Export Validation
- [ ] Export with all 12 block types works
- [ ] Export with custom colors works
- [ ] Export with logos/images works
- [ ] File naming is sanitized
- [ ] No sensitive data in export

### 8. GitHub Deployment

#### GitHub Integration
- [ ] GitHub auth flow works
- [ ] Can authorize application
- [ ] Repository is created with project name
- [ ] Files are pushed to repository
- [ ] GitHub Pages is enabled
- [ ] Deployment URL is provided
- [ ] Site is accessible at URL
- [ ] All blocks render correctly on GitHub Pages

#### Edge Cases
- [ ] Handles existing repository names
- [ ] Handles GitHub API errors
- [ ] Shows mock deployment in development
- [ ] Handles network failures

### 9. Access Level System

#### Access Levels
Three tiers implemented:
- **Basic** (Free): All 12 blocks available
- **Pro** ($19/mo): Future premium features
- **Business** ($49/mo): Future enterprise features

#### Block Access
- [ ] All blocks show "BASIC" access level
- [ ] Access badges visible on blocks in sidebar
- [ ] **Locked blocks show lock icon (when implemented)**
- [ ] **Clicking locked block shows upgrade prompt**
- [ ] Free users can use all current blocks

#### Billing Page
- [ ] Displays 3 pricing tiers
- [ ] Shows feature lists for each tier
- [ ] "Get Started Free" button works
- [ ] Stripe integration ready (test mode)

### 10. Live Preview

#### Real-time Updates
- [ ] Preview updates when adding blocks
- [ ] Preview updates when editing content
- [ ] Preview updates when changing colors
- [ ] Preview updates when deleting blocks
- [ ] Preview updates when reordering blocks
- [ ] Preview shows correct styling
- [ ] Preview is responsive in iframe

#### Preview Accuracy
All 12 blocks render correctly:
- [ ] Hero with logo and background image
- [ ] Features with custom colors
- [ ] CTA with button styling
- [ ] Pricing with all plans
- [ ] Testimonials with avatars
- [ ] Contact form with colors
- [ ] **Logo Cloud with company logos**
- [ ] **Team section with member profiles**
- [ ] **Statistics with numbers and icons**
- [ ] **FAQ with questions and answers**
- [ ] **Newsletter with email form**
- [ ] Footer with links and copyright

#### Preview Accessibility
- [ ] iframe has title attribute
- [ ] iframe has aria-label
- [ ] Preview content is accessible
- [ ] Color contrasts are maintained

### 11. Accessibility Testing

#### Keyboard Navigation
- [ ] Can navigate entire dashboard with Tab
- [ ] Can activate buttons with Enter/Space
- [ ] Focus indicators visible on all interactive elements
- [ ] Skip link works on landing page
- [ ] Modal can be closed with Escape

#### Screen Reader Compatibility
- [ ] All images have alt text or aria-labels
- [ ] Buttons have descriptive labels
- [ ] Status messages use role="alert" or aria-live
- [ ] Form fields have associated labels
- [ ] Headings follow proper hierarchy (h1, h2, h3)

#### Color & Contrast
- [ ] All text meets WCAG AA (4.5:1)
- [ ] Buttons meet WCAG AA
- [ ] Focus indicators have sufficient contrast
- [ ] Error messages are clearly visible
- [ ] Secondary color (#065f46) passes AA

#### HTML Attributes
- [ ] lang="en" on <html> element
- [ ] Proper document title on each page
- [ ] Meta descriptions present
- [ ] Semantic HTML used (nav, main, footer, section)

### 12. Error Handling

#### Network Errors
- [ ] Shows error on API failure
- [ ] Graceful degradation
- [ ] User is informed of issues
- [ ] localStorage backup prevents data loss

#### Validation Errors
- [ ] Form validation works
- [ ] **Contrast validation prevents saving**
- [ ] Shows helpful error messages
- [ ] Prevents invalid submissions
- [ ] Highlights problem fields

#### Edge Cases
- [ ] Handles very long content
- [ ] Handles special characters
- [ ] Handles empty content
- [ ] Handles missing images (fallback)
- [ ] Handles localStorage quota exceeded

## Performance Testing

### Load Times
- [ ] Landing page loads < 3s
- [ ] Dashboard loads < 3s
- [ ] Preview updates < 100ms
- [ ] Auto-save completes < 1s
- [ ] Export generates < 10s

### Metrics to Monitor
- Page load time (< 3s)
- Time to interactive (< 5s)
- API response time (< 500ms)
- localStorage write time (< 50ms)
- Auto-save interval (30s)

## Browser Compatibility

Test on:
- [ ] Chrome (latest) - Primary
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS 15+)
- [ ] Chrome Mobile (Android)

## Security Testing

### Authentication
- [ ] Passwords are hashed (Supabase handles)
- [ ] JWT tokens expire appropriately
- [ ] Sessions are secure (HttpOnly cookies)
- [ ] Auto-refresh tokens work

### Authorization
- [ ] Users can only access own projects
- [ ] API routes are protected
- [ ] RLS policies work in Supabase
- [ ] Middleware blocks unauthorized access

### Data Validation
- [ ] All inputs are sanitized
- [ ] XSS protection works
- [ ] SQL injection prevented (Supabase ORM)
- [ ] localStorage is sandboxed per domain

## Test Data

### Sample Projects
Create test projects with:
- Empty project (just header and footer)
- All 12 block types
- Maximum content in each block
- Special characters in content
- Very long content (stress test)
- Custom colors throughout
- Multiple logos and images

### Test Users
- Free tier user (Basic plan)
- Pro tier user (when implemented)
- Business tier user (when implemented)

## Success Criteria

A release is ready when:
- [ ] All critical tests pass
- [ ] No high-priority bugs
- [ ] Performance metrics met
- [ ] Accessibility scan passes (WCAG AA)
- [ ] All 12 blocks work correctly
- [ ] Auto-save and localStorage work
- [ ] Color contrast validation works
- [ ] Session persistence works (24h)
- [ ] Documentation updated
- [ ] Changelog updated

## Known Issues & Limitations

Document any current limitations:
1. AI content generation requires API key
2. GitHub deployment requires GitHub token
3. Stripe requires webhook configuration
4. Some browsers may have localStorage limits
5. Access level system UI only (no enforcement yet)

## Support & Issues

For testing support:
- Review this guide
- Check issues on GitHub: https://github.com/jjephson/sitegenerator
- Review application logs in browser console
- Check Supabase logs for auth/database issues
- Check Stripe dashboard for payment issues

## Quick Test Script

For rapid smoke testing:
```bash
# 1. Start server
npm run dev

# 2. Test auth flow
- Register new account
- Verify dashboard loads
- Logout
- Login again

# 3. Test builder
- Add all 12 blocks
- Edit each block
- Change colors
- Refresh page (verify restore)
- Save project
- Export ZIP

# 4. Test preview
- Verify all blocks render
- Check color customizations
- Verify responsive layout

# Pass ✓
```

## Automated Testing (Future Enhancement)

Future improvements should include:
- Unit tests with Vitest
- Component tests with Vue Test Utils
- E2E tests with Playwright
- Visual regression tests
- Lighthouse CI for performance
- Automated accessibility scans

---

Last Updated: 2025
Version: 2.0 (12 blocks, auto-save, contrast checking)
