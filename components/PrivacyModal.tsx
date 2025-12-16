import React from 'react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                {/* Overlay */}
                <div
                    className="fixed inset-0 transition-opacity bg-black bg-opacity-50"
                    onClick={onClose}
                ></div>

                {/* Modal Content */}
                <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
                    {/* Header */}
                    <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 py-4 flex justify-between items-center z-10">
                        <h2 className="text-2xl font-bold text-neutral-900">Privacy Policy</h2>
                        <button
                            onClick={onClose}
                            className="text-neutral-500 hover:text-neutral-900 transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="px-6 py-8 max-h-[70vh] overflow-y-auto">
                        <div className="prose prose-neutral max-w-none">
                            <p className="text-sm text-neutral-500 mb-6">
                                <strong>Effective Date:</strong> January 2025<br />
                                <strong>Last Updated:</strong> January 2025
                            </p>

                            <p className="mb-6">
                                This Privacy Policy explains how Anchor ("we", "our", or "us") collects, uses, and protects information from users who visit our website, join our early-access waitlist, or interact with our product previews (the "Service").
                            </p>

                            <p className="mb-8">
                                By using our website or submitting your information, you agree to the terms of this Privacy Policy.
                            </p>

                            <h3 className="text-xl font-bold mb-4">1. Information We Collect</h3>

                            <h4 className="text-lg font-semibold mb-2">1.1 Information You Provide</h4>
                            <p className="mb-4">
                                We only collect the minimum information required for early-access registration and communication:
                            </p>
                            <ul className="list-disc pl-6 mb-6">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Optional role or occupation (e.g., researcher, academic, automation enthusiast, PM, general knowledge worker)</li>
                            </ul>

                            <h4 className="text-lg font-semibold mb-2">1.2 Automatically Collected Information</h4>
                            <p className="mb-4">
                                We may use analytics tools (e.g., Google Analytics or similar services) that automatically collect:
                            </p>
                            <ul className="list-disc pl-6 mb-6">
                                <li>Device type and browser information</li>
                                <li>Pages visited</li>
                                <li>Interaction data such as scroll depth, clicks, and time on page</li>
                                <li>IP address (anonymized when possible)</li>
                            </ul>
                            <p className="mb-6">
                                We do not collect or store the contents of your apps, files, or tasks at this stage.
                            </p>

                            <h3 className="text-xl font-bold mb-4">2. How We Use Your Information</h3>
                            <p className="mb-4">We use the information we collect to:</p>
                            <ul className="list-disc pl-6 mb-6">
                                <li>Provide early-access invitations</li>
                                <li>Send product updates or onboarding information</li>
                                <li>Improve our website and user experience</li>
                                <li>Analyze traffic and measure engagement</li>
                                <li>Understand which user groups are interested in Anchor</li>
                            </ul>
                            <p className="mb-6">
                                <strong>We do not sell your data to third parties.</strong>
                            </p>

                            <h3 className="text-xl font-bold mb-4">3. How We Share Information</h3>
                            <ul className="list-disc pl-6 mb-6">
                                <li>We may share anonymized analytics data with service providers who help us operate the website (e.g., Google Analytics, Google Sheets, email delivery services).</li>
                                <li>We do not disclose personal information except as required by law.</li>
                            </ul>

                            <h3 className="text-xl font-bold mb-4">4. Third-Party Services</h3>
                            <p className="mb-4">We use the following third-party services:</p>
                            <ul className="list-disc pl-6 mb-6">
                                <li><strong>Google Analytics:</strong> For website analytics and user behavior tracking</li>
                                <li><strong>Google Sheets:</strong> For storing waitlist information</li>
                                <li><strong>Google Apps Script:</strong> For processing form submissions and sending notifications</li>
                            </ul>
                            <p className="mb-6">
                                These services have their own privacy policies and data handling practices.
                            </p>

                            <h3 className="text-xl font-bold mb-4">5. Cookies and Tracking</h3>
                            <p className="mb-6">
                                Our website may use cookies to support analytics, waitlist forms, and performance measurement. You may disable cookies in your browser settings, but some features may not function properly.
                            </p>

                            <h3 className="text-xl font-bold mb-4">6. Data Retention</h3>
                            <p className="mb-6">
                                We retain your name, email, and role information only as long as necessary for early-access communication or until you request deletion.
                            </p>

                            <h3 className="text-xl font-bold mb-4">7. Your Rights</h3>
                            <p className="mb-4">You may request at any time to:</p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Access the data we hold about you</li>
                                <li>Correct or update your information</li>
                                <li>Request deletion of your personal data</li>
                                <li>Opt out of early-access communication</li>
                            </ul>
                            <p className="mb-6">
                                To make a request, contact us at: <a href="mailto:hyungjin015@gmail.com" className="text-blue-600 hover:underline">hyungjin015@gmail.com</a>
                            </p>

                            <h3 className="text-xl font-bold mb-4">8. California Privacy Rights (CCPA)</h3>
                            <p className="mb-4">
                                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
                            </p>
                            <ul className="list-disc pl-6 mb-6">
                                <li>Right to know what personal information is collected, used, shared, or sold</li>
                                <li>Right to delete personal information</li>
                                <li>Right to opt-out of the sale of personal information (we do not sell your data)</li>
                                <li>Right to non-discrimination for exercising your CCPA rights</li>
                            </ul>

                            <h3 className="text-xl font-bold mb-4">9. International Data Transfers</h3>
                            <p className="mb-6">
                                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy.
                            </p>

                            <h3 className="text-xl font-bold mb-4">10. Data Security</h3>
                            <p className="mb-6">
                                We use reasonable administrative, technical, and physical safeguards to protect your information. No system is perfectly secure, but we strive to protect data through minimal collection and safe handling.
                            </p>

                            <h3 className="text-xl font-bold mb-4">11. Children's Privacy</h3>
                            <p className="mb-6">
                                Anchor is not intended for children under 13. We do not knowingly collect personal information from children.
                            </p>

                            <h3 className="text-xl font-bold mb-4">12. Updates to This Policy</h3>
                            <p className="mb-6">
                                We may update this Privacy Policy as our Service evolves. When changes occur, we will update the "Last Updated" date at the top of this document.
                            </p>

                            <h3 className="text-xl font-bold mb-4">13. Contact Information</h3>
                            <p className="mb-6">
                                For questions regarding this Privacy Policy, contact us at:<br />
                                <a href="mailto:hyungjin015@gmail.com" className="text-blue-600 hover:underline">hyungjin015@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyModal;
