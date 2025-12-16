import React from 'react';
import { X } from 'lucide-react';

interface TermsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
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
                        <h2 className="text-2xl font-bold text-neutral-900">Terms of Service</h2>
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

                            <p className="mb-8">
                                These Terms of Service ("Terms") govern your use of Anchor's website, early-access waitlist, and any previews or demos we provide (collectively, the "Service"). By accessing or using the Service, you agree to these Terms.
                            </p>

                            <h3 className="text-xl font-bold mb-4">1. Use of the Service</h3>
                            <p className="mb-4">
                                Anchor provides early-access registration, product previews, and informational content for the purpose of evaluating user interest. The Service is offered "as is" and may change without notice.
                            </p>
                            <p className="mb-4">You agree not to:</p>
                            <ul className="list-disc pl-6 mb-6">
                                <li>Use the Service for unlawful activities</li>
                                <li>Attempt to disrupt or damage the website</li>
                                <li>Copy, reverse-engineer, or redistribute any part of the Service unless permitted</li>
                                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                                <li>Violate any applicable local, state, national, or international law</li>
                            </ul>

                            <h3 className="text-xl font-bold mb-4">2. Early Access Program</h3>
                            <ul className="list-disc pl-6 mb-6">
                                <li>Signing up does not guarantee access. Invitations may be limited or prioritized by role or use case.</li>
                                <li>We may modify or discontinue the early-access program at any time.</li>
                                <li>You may unsubscribe at any time via the link in our email communications.</li>
                            </ul>

                            <h3 className="text-xl font-bold mb-4">3. Account Termination</h3>
                            <p className="mb-6">
                                We reserve the right to suspend or terminate your access to the Service at any time, with or without cause, and with or without notice. Reasons may include violation of these Terms, fraudulent activity, or behavior that could harm other users or the Service.
                            </p>

                            <h3 className="text-xl font-bold mb-4">4. User-Generated Content</h3>
                            <p className="mb-4">
                                If you submit feedback, suggestions, or other content related to Anchor:
                            </p>
                            <ul className="list-disc pl-6 mb-6">
                                <li>You grant us a perpetual, non-exclusive, royalty-free license to use, modify, and incorporate your feedback into the Service</li>
                                <li>You represent that your content does not violate any third-party rights</li>
                                <li>We are not obligated to use or respond to your feedback</li>
                            </ul>

                            <h3 className="text-xl font-bold mb-4">5. Intellectual Property</h3>
                            <p className="mb-6">
                                All content, branding, code, design elements, and media related to Anchor are the property of the Anchor team and are protected by copyright and other intellectual property laws. You may not reproduce or redistribute them without permission.
                            </p>

                            <h3 className="text-xl font-bold mb-4">6. Disclaimers</h3>
                            <p className="mb-4">
                                The Service is provided "as is" without warranties of any kind, express or implied. Anchor does not guarantee:
                            </p>
                            <ul className="list-disc pl-6 mb-6">
                                <li>Accuracy of information</li>
                                <li>Continuous uptime</li>
                                <li>That the early-access software preview will function error-free</li>
                                <li>Compatibility with your specific systems or workflows</li>
                            </ul>
                            <p className="mb-6">
                                We are in pre-release development and stability is not guaranteed.
                            </p>

                            <h3 className="text-xl font-bold mb-4">7. Limitation of Liability</h3>
                            <p className="mb-4">
                                To the fullest extent permitted by law, Anchor is not responsible for:
                            </p>
                            <ul className="list-disc pl-6 mb-6">
                                <li>Any damages resulting from use or inability to use the Service</li>
                                <li>Loss of data, productivity, or expected outcomes</li>
                                <li>Third-party service failures (analytics tools, waitlist platforms, etc.)</li>
                                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                            </ul>
                            <p className="mb-6">
                                Your use of the Service is at your own risk.
                            </p>

                            <h3 className="text-xl font-bold mb-4">8. Indemnification</h3>
                            <p className="mb-6">
                                You agree to indemnify, defend, and hold harmless Anchor and its affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Service, your violation of these Terms, or your violation of any rights of another party.
                            </p>

                            <h3 className="text-xl font-bold mb-4">9. Third-Party Services</h3>
                            <p className="mb-6">
                                Anchor may integrate or use third-party tools such as analytics platforms (Google Analytics), cloud storage (Google Sheets), or email services. Your use of those services is subject to their own terms and policies.
                            </p>

                            <h3 className="text-xl font-bold mb-4">10. Dispute Resolution and Arbitration</h3>
                            <p className="mb-4">
                                Any disputes arising from these Terms or your use of the Service will be resolved as follows:
                            </p>
                            <ul className="list-disc pl-6 mb-6">
                                <li>Informal Resolution: Before filing a claim, you agree to contact us at <a href="mailto:hyungjin015@gmail.com" className="text-blue-600 hover:underline">hyungjin015@gmail.com</a> to attempt to resolve the dispute informally</li>
                                <li>Binding Arbitration: If informal resolution fails, disputes will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association</li>
                                <li>Class Action Waiver: You agree to resolve disputes individually and waive the right to participate in class actions or class arbitrations</li>
                            </ul>

                            <h3 className="text-xl font-bold mb-4">11. Governing Law</h3>
                            <p className="mb-6">
                                These Terms are governed by the laws of the State of California, without regard to conflict-of-law principles. Any disputes arising under these Terms will be resolved in state or federal courts in California.
                            </p>

                            <h3 className="text-xl font-bold mb-4">12. Export Compliance</h3>
                            <p className="mb-6">
                                You agree to comply with all applicable export and import control laws and regulations. You will not use the Service in any country or jurisdiction where such use would violate applicable law.
                            </p>

                            <h3 className="text-xl font-bold mb-4">13. Severability</h3>
                            <p className="mb-6">
                                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                            </p>

                            <h3 className="text-xl font-bold mb-4">14. Changes to These Terms</h3>
                            <p className="mb-6">
                                We may update these Terms from time to time. When changes occur, we will update the "Last Updated" date at the top of this document. Continued use of the Service after changes constitutes acceptance of the updated Terms.
                            </p>

                            <h3 className="text-xl font-bold mb-4">15. Contact Information</h3>
                            <p className="mb-6">
                                For questions regarding these Terms, contact us at:<br />
                                <a href="mailto:hyungjin015@gmail.com" className="text-blue-600 hover:underline">hyungjin015@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsModal;
