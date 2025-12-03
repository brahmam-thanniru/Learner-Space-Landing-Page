import React from "react";
import "../../style/PrivacyAndPolicy.css";
const PrivacyPolicyPage: React.FC = () => {
  return (
    <section className="legal-section">
      <div className="legal-content">
        <h1 className="legal-title">Privacy Policy — LearnerSpace</h1>
        <p className="legal-updated">Last updated: 03 December 2025</p>

        <p>
          Welcome to <strong>LearnerSpace</strong> (“we”, “our”, “us”). We are
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, store, and disclose your data when you
          use <strong>https://learnerspace.in/</strong>.
        </p>

        <h2>1. Information We Collect</h2>
        <h3>a. Personal Information</h3>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Password (encrypted)</li>
          <li>Details submitted through forms or communication</li>
        </ul>

        <h3>b. Usage & Technical Data</h3>
        <ul>
          <li>IP address</li>
          <li>Browser type / version</li>
          <li>Device details</li>
          <li>Pages visited</li>
          <li>Time spent on platform</li>
          <li>Operating system</li>
          <li>Referring website</li>
        </ul>

        <h3>c. Cookies & Tracking Tools</h3>
        <p>
          We may use cookies, local storage, and analytics tools to understand
          user interactions and improve platform experience.
        </p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To provide and improve our services</li>
          <li>To personalize your learning recommendations</li>
          <li>To respond to support requests</li>
          <li>To send important updates or notifications</li>
          <li>To monitor website analytics</li>
          <li>To enhance platform security</li>
          <li>To send optional promotional emails (with consent)</li>
        </ul>

        <h2>3. Sharing of Information</h2>
        <p>We do not sell your data. We may share information with:</p>
        <ul>
          <li>Hosting providers</li>
          <li>Email/SMS gateways</li>
          <li>Analytics services</li>
          <li>Payment gateways (if applicable)</li>
        </ul>
        <p>
          Information may also be disclosed to comply with legal obligations or
          prevent fraud.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We use secure servers, encrypted storage, and access restrictions. No
          system is 100% secure, but we follow industry best practices.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We retain data as long as needed to provide services or meet legal
          requirements. You may request deletion anytime.
        </p>

        <h2>6. Your Rights</h2>
        <ul>
          <li>Access your information</li>
          <li>Request corrections</li>
          <li>Request deletion</li>
          <li>Download your data</li>
          <li>Opt-out of marketing emails</li>
        </ul>
        <p>
          To exercise your rights, email:{" "}
          <a href="mailto:info@learnerspace.in">info@learnerspace.in</a>
        </p>

        <h2>7. Children’s Privacy</h2>
        <p>
          LearnerSpace is not intended for children under 13 without parental
          consent. If such data is found, we will delete it.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Updates will be posted
          on this page.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          📧 <a href="mailto:info@learnerspace.in">info@learnerspace.in</a>
          <br />
          📍 Bangalore, India
        </p>

        {/* TERMS SECTION */}
        <hr className="divider" />

        <h1 className="legal-title">Terms & Conditions — LearnerSpace</h1>
        <p className="legal-updated">Last updated: 03 December 2025</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By using this Website, you agree to follow these Terms & Conditions.
        </p>

        <h2>2. Use of Website</h2>
        <ul>
          <li>You will not misuse the platform</li>
          <li>You will not upload harmful scripts or data</li>
          <li>You will not impersonate others</li>
          <li>You will not copy or redistribute content</li>
        </ul>

        <h2>3. User Accounts</h2>
        <p>
          You must provide accurate information and keep your credentials safe.
          We are not responsible for account misuse.
        </p>

        <h2>4. Content Ownership</h2>
        <p>
          All content is owned by LearnerSpace. Copying or redistributing
          without permission is prohibited.
        </p>

        <h2>5. Payments & Refunds (If Applicable)</h2>
        <p>
          Payments must be made through approved gateways. Refunds follow our
          platform’s refund policy.
        </p>

        <h2>6. Third-Party Links</h2>
        <p>
          We are not responsible for content or policies of external websites.
        </p>

        <h2>7. Termination</h2>
        <p>
          We may suspend or terminate access if terms are violated or misuse is
          detected.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          LearnerSpace is not responsible for data loss, service interruptions,
          technical issues, or damages.
        </p>

        <h2>9. Governing Law</h2>
        <p>These Terms are governed by Indian law and jurisdiction.</p>

        <h2>10. Contact Us</h2>
        <p>
          📧 <a href="mailto:info@learnerspace.in">info@learnerspace.in</a>
          <br />
          📍 Bangalore, India
        </p>
      </div>

      <div className="legal-decorations">
        <div className="triangle-lg"></div>
        <div className="floating-square-sm"></div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
