'use client'
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

export default function Faq(){

  return (
    <div id="faq" className="py-24 bg-zen-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-zen-stone mb-4">Frequently Asked Questions</h2>
          <p className="text-zen-stone/80">
            Find answers to common questions about your stay at Serenity Haven
          </p>
        </div>

        <div className="space-y-6">
          <FAQItem
            question="What are your check-in and check-out times?"
            answer="Check-in time is from 3:00 PM, and check-out time is until 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability."
          />

          <FAQItem
            question="Do you offer airport transfers?"
            answer="Yes, we provide airport transfers for our guests. This service is included in our Serenity Complete package or can be arranged separately for an additional fee. Please contact us in advance to schedule your transfer."
          />

          <FAQItem
            question="What spa treatments are available?"
            answer="We offer a wide range of spa treatments including traditional hammam, massages, facials, body wraps, and aromatherapy sessions. Our wellness consultants can help create a personalized treatment plan for you."
          />

          <FAQItem
            question="Is breakfast included in the room rate?"
            answer="Yes, all our room rates include our signature gourmet breakfast, featuring local and organic ingredients. We can accommodate dietary restrictions with advance notice."
          />

          <FAQItem
            question="Can you accommodate dietary restrictions?"
            answer="Absolutely! We cater to various dietary requirements including vegetarian, vegan, gluten-free, and other specific needs. Please inform us of any dietary restrictions when booking."
          />

          <FAQItem
            question="What amenities are available in the rooms?"
            answer="All rooms feature luxury bedding, en-suite bathrooms, high-speed WiFi, smart TVs, premium toiletries, bathrobes, slippers, and a mini bar. Higher-tier rooms include additional amenities like private balconies or spa tubs."
          />

          <FAQItem
            question="Do you offer gift certificates?"
            answer="Yes, we offer gift certificates for both accommodation and spa services. These can be customized to include specific treatments or packages and are valid for 12 months from the date of purchase."
          />

          <FAQItem
            question="What is your cancellation policy?"
            answer="We have a 48-hour cancellation policy. Cancellations made within 48 hours of the check-in date may be subject to a charge equivalent to one night's stay. We recommend booking with travel insurance for added peace of mind."
          />
        </div>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-zen-sage/20">
      <button
        className="w-full flex justify-between items-center py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-serif text-lg text-zen-stone">{question}</span>
        <span className="text-zen-sage ml-4">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-zen-stone/80">{answer}</p>
        </div>
      )}
    </div>
  );
}