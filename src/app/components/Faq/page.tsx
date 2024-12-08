'use client'
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

export default function Faq() {

  return (
    <div id="faq" className="py-24 bg-zen-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-zen-stone mb-4">FAQ - Questions fréquemment posées</h2>
          <p className="text-zen-stone/80">
          Trouvez les réponses aux questions les plus courantes concernant votre séjour 
          </p>
        </div>

        <div className="space-y-6">
          <FAQItem
            question="Quels sont les équipements disponibles dans le spa ?"
            answer="Un jacuzzi 5 places, 1 hammam 2 places et 1 sauna à infra-rouges 3 places
            Vous trouverez également plusieurs accessoires dédiés au bien être."
          />

          <FAQItem
            question="Le jacuzzi est-il privatif ou partagé ?"
            answer="Le spa est totalement privatisé le temps de votre séance."
          />

          <FAQItem
            question="Quels types de massages proposez-vous ?"
            answer="Ce sont des massages de madérothérapie Sur réservation également, possibilité de massages bien être/ modelage"
          />

          <FAQItem
            question="Les services de spa et hammam sont-ils inclus dans la réservation ?"
            answer="Oui, tout est à votre entière disposition"
          />

          <FAQItem
            question="Y a-t-il des horaires spécifiques pour accéder au spa ou au hammam ?"
            answer="Oui, en journée le week-end, quelques sessions disponibles en soirée le week-end Egalement sur certaines dates festives (St Valentin, Halloween, ...) "
          />

          <FAQItem
            question="Comment puis-je réserver une chambre ou un service de spa/massage ?"
            answer="Réservation par téléphone (tel ou sms), whatsapp, instagram"
          />

          <FAQItem
            question="Quels sont les moyens de paiement acceptés "
            answer="CB, espèces, Paylib. Possibilité de facture sur simple demande "
          />

          <FAQItem
            question="Est-il possible d'annuler ou de modifier une réservation ?"
            answer="Oui, au minimum 5 jours avant. En fonction de la prestation choisie, un acompte non remboursable pourra vous être demandé"
          />
          <FAQItem
            question="Quels types de plats sont servis ?"
            answer={
              <>
                Suivant les formules choisies :
                <ul className="list-disc list-inside">
                  <li>des assiettes sucrées, avec des préparations maison et à base de produits de saison</li>
                  <li>des assiettes salées, mixant des produits artisanaux (charcuteries, fromages, préparations de poisson)</li>
                  <li>des formules brunch ou des formules raclettes</li>
                </ul>
              </>
            }
          />
          <FAQItem
            question="Peut-on demander des plats adaptés aux régimes alimentaires spécifiques (végétarien, sans gluten, etc.) ?"
            answer="Oui. Pensez bien à signaler dès votre réservation toute allergie ou régime alimentaire spécifique. Nous pouvons vous préparer des assiettes sucrées ou salées en fonction"
          />
          <FAQItem
            question="Où se trouve l’établissement et comment y accéder ?"
            answer="Le spa se trouve à Soignolles en Brie. Il existe une ligne de bus (n°30A) mais avec une desserte très limitée. 
            En voiture, le GPS vous amène pile devant la porte ;-)"
          />
          <FAQItem
            question="Y a-t-il un parking sur place ?"
            answer="Oui, possibilité de stationnement gratuit"
          />
          <FAQItem
            question="Est-il possible d'annuler ou de modifier une réservation ?"
            answer="Oui, au minimum 5 jours avant. En fonction de la prestation choisie, un acompte non remboursable pourra vous être demandé"
          />
        </div>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);;

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
          <div className="text-zen-stone/80">{answer}</div>
        </div>
      )}
    </div>
  );
}