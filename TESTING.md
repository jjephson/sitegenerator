# Testing Guide

This document covers testing procedures for the OnePage AI Builder.

## Testing Overview

The OnePage AI Builder should be tested across the following areas:
- Authentication & Authorization
- Project Management (CRUD operations)
- Block System (add, edit, delete, reorder)
- AI Content Generation
- Export Functionality
- GitHub Deployment
- Stripe Payment Integration
- UI/UX

## Prerequisites

Before testing:
- Local development server running (`npm run dev`)
- All environment variables configured
- Test accounts created in Supabase
- Stripe test mode enabled
- Test data available

## Manual Testing Checklist

### 1. Authentication

#### Registration
- [ ] Can create a new account with valid email/password
- [ ] Cannot register with invalid email format
- [ ] Cannot register with weak password
- [ ] Receives confirmation email (if enabled)
- [ ] Redirected to dashboard after successful registration

#### Login
- [ ] Can log in with valid credentials
- [ ] Cannot log in with invalid credentials
- [ ] Shows appropriate error messages
- [ ] Redirected to dashboard after login
- [ ] Session persists on page reload

#### Logout
- [ ] Can log out successfully
- [ ] Redirected to login page after logout
- [ ] Cannot access protected routes after logout

### 2. Dashboard & UI

#### Navigation
- [ ] Dashboard loads correctly
- [ ] Sidebar displays available blocks
- [ ] Canvas area is visible
- [ ] Preview pane updates in real-time
- [ ] All buttons and controls are accessible

#### Responsive Design
- [ ] Works on desktop (1920x1080)
- [ ] Works on laptop (1366x768)
- [ ] Works on tablet (768px width)
- [ ] Works on mobile (375px width)

### 3. Block Management

#### Adding Blocks
- [ ] Can drag and drop blocks from sidebar
- [ ] Can click blocks to add them
- [ ] Blocks appear in correct order
- [ ] Each block type renders correctly
- [ ] Hero block displays with default content
- [ ] Features block displays with default features
- [ ] CTA block displays correctly
- [ ] Pricing block displays with default plans
- [ ] Testimonials block displays correctly
- [ ] Contact block displays correctly
- [ ] Footer block displays correctly

#### Editing Blocks
- [ ] Edit modal opens when clicking edit button
- [ ] All fields are editable
- [ ] Changes save correctly
- [ ] Preview updates after saving
- [ ] Can cancel without saving changes

#### Deleting Blocks
- [ ] Can delete blocks
- [ ] Confirmation prompt appears
- [ ] Block removed from canvas
- [ ] Preview updates after deletion

#### Reordering Blocks
- [ ] Can move blocks up
- [ ] Can move blocks down
- [ ] Order persists correctly
- [ ] Preview reflects new order

### 4. AI Content Generation

#### AI Integration
- [ ] AI button appears next to text fields
- [ ] Clicking AI button generates content
- [ ] Generated content appears in field
- [ ] Shows loading state during generation
- [ ] Handles API errors gracefully
- [ ] Works for different block types

#### Edge Cases
- [ ] Handles slow API responses
- [ ] Handles API failures
- [ ] Shows fallback content in development
- [ ] Rate limiting respected (if applicable)

### 5. Project Management

#### Saving Projects
- [ ] Can save new project
- [ ] Can update existing project
- [ ] Project name is editable
- [ ] Save confirmation appears
- [ ] Data persists in database
- [ ] Only owner can access project

#### Loading Projects
- [ ] Can load saved projects
- [ ] Projects list displays correctly
- [ ] Most recent project loads by default
- [ ] All blocks load correctly
- [ ] Block order is preserved
- [ ] Content is intact

#### Multiple Projects
- [ ] Can create multiple projects
- [ ] Can switch between projects
- [ ] Projects don't interfere with each other
- [ ] Each user sees only their projects

### 6. Export Functionality

#### ZIP Export
- [ ] Export button works
- [ ] ZIP file downloads
- [ ] ZIP contains all necessary files
- [ ] index.html is valid
- [ ] styles.css is included
- [ ] package.json is correct
- [ ] vite.config.js is included
- [ ] README.md is included
- [ ] Exported site works standalone
- [ ] All blocks render correctly in export

#### Export Validation
- [ ] Export with empty project works
- [ ] Export with all block types works
- [ ] Export with special characters works
- [ ] File naming is correct
- [ ] No sensitive data in export

### 7. GitHub Deployment

#### GitHub Integration
- [ ] GitHub auth flow works
- [ ] Can authorize application
- [ ] Repository is created
- [ ] Files are pushed to repository
- [ ] GitHub Pages is enabled
- [ ] Deployment URL is provided
- [ ] Site is accessible at URL

#### Edge Cases
- [ ] Handles existing repository names
- [ ] Handles GitHub API errors
- [ ] Shows mock deployment in development
- [ ] Handles network failures

### 8. Stripe Payment Integration

#### Checkout Flow
- [ ] Billing page displays plans
- [ ] Can click upgrade button
- [ ] Stripe Checkout loads
- [ ] Can enter test card details
- [ ] Payment processes successfully
- [ ] Redirected after success
- [ ] Subscription status updates

#### Test Cards
Use Stripe test cards:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- Auth Required: `4000 0025 0000 3155`

#### Webhook Handling
- [ ] Webhook receives events
- [ ] checkout.session.completed handled
- [ ] subscription.updated handled
- [ ] subscription.deleted handled
- [ ] Database updates correctly
- [ ] No duplicate processing

### 9. Live Preview

#### Real-time Updates
- [ ] Preview updates when adding blocks
- [ ] Preview updates when editing blocks
- [ ] Preview updates when deleting blocks
- [ ] Preview updates when reordering blocks
- [ ] Preview shows correct styling
- [ ] Preview is responsive

#### Preview Accuracy
- [ ] Hero section displays correctly
- [ ] Features grid works
- [ ] CTA section renders
- [ ] Pricing table displays
- [ ] Testimonials show
- [ ] Contact form renders
- [ ] Footer displays
- [ ] All content is readable

### 10. Error Handling

#### Network Errors
- [ ] Shows error on API failure
- [ ] Graceful degradation
- [ ] Retry mechanism works
- [ ] User is informed of issues

#### Validation Errors
- [ ] Form validation works
- [ ] Shows helpful error messages
- [ ] Prevents invalid submissions
- [ ] Highlights problem fields

#### Edge Cases
- [ ] Handles very long content
- [ ] Handles special characters
- [ ] Handles empty content
- [ ] Handles concurrent edits

## Automated Testing

### Unit Tests (Future Enhancement)

Create tests for:
- Store actions and getters
- Utility functions
- API endpoint handlers
- Component rendering

Example test structure:

```javascript
// store/builder.test.js
describe('Builder Store', () => {
  it('adds block correctly', () => {
    const store = useBuilderStore()
    store.addBlock('hero')
    expect(store.blocks.length).toBe(1)
  })
})
```

### Integration Tests (Future Enhancement)

Test complete user flows:
- Registration to project creation
- Login to export
- Payment to access features

### E2E Tests (Future Enhancement)

Use Playwright or Cypress:

```javascript
// e2e/builder.spec.js
test('can build and export a page', async ({ page }) => {
  await page.goto('/login')
  await page.fill('[type="email"]', 'test@example.com')
  await page.fill('[type="password"]', 'password')
  await page.click('button[type="submit"]')
  
  await page.waitForURL('/dashboard')
  await page.click('text=Hero Section')
  await page.click('text=Export ZIP')
  
  // Assert download happened
})
```

## Performance Testing

### Load Testing
- Test with 100+ concurrent users
- Monitor response times
- Check database performance
- Verify serverless scaling

### Metrics to Monitor
- Page load time (< 3s)
- Time to interactive (< 5s)
- API response time (< 500ms)
- Export generation time (< 10s)

## Security Testing

### Authentication
- [ ] Passwords are hashed
- [ ] JWT tokens expire
- [ ] Sessions are secure
- [ ] CSRF protection works

### Authorization
- [ ] Users can only access own projects
- [ ] API routes are protected
- [ ] RLS policies work in Supabase

### Data Validation
- [ ] All inputs are sanitized
- [ ] XSS protection works
- [ ] SQL injection prevented
- [ ] File upload restrictions work

## Browser Compatibility

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible
- [ ] Alt text on images
- [ ] ARIA labels present

## Bug Reporting

When reporting bugs, include:
1. Steps to reproduce
2. Expected behavior
3. Actual behavior
4. Screenshots/videos
5. Browser and OS
6. Console errors
7. Network logs (if applicable)

## Test Data

### Sample Projects

Create test projects with:
- Empty project
- Single block
- All block types
- Maximum blocks (stress test)
- Special characters in content
- Very long content

### Test Users

Create test accounts for:
- Free tier user
- Pro tier user
- Admin user (if applicable)
- Suspended user

## Continuous Testing

### Pre-commit
- Run linters
- Check formatting
- Run unit tests

### Pre-deploy
- Run full test suite
- Check build succeeds
- Verify environment variables
- Test in staging environment

## Success Criteria

A release is ready when:
- [ ] All critical tests pass
- [ ] No high-priority bugs
- [ ] Performance metrics met
- [ ] Security scan passes
- [ ] Documentation updated
- [ ] Changelog updated

## Support & Issues

For testing support:
- Review this guide
- Check existing issues on GitHub
- Contact development team
- Review application logs

