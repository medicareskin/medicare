import React, { useState } from 'react';
import { ArrowRight, Calendar, CheckCircle2, ChevronDown, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import SEOHead from '../components/SEOHead';
import './HairConcernLandingPage.css';

const LANDING_CONTENT = {
  'hair-fall-treatment': {
    path: '/hair-fall-treatment/',
    eyebrow: 'HAIR FALL EVALUATION IN SOUTH BENGALURU',
    headline: 'Hair Fall Treatment in Bengaluru',
    intro: 'Noticing more hair shedding than usual? A dermatologist can assess the pattern, timing and possible triggers before recommending a plan tailored to you.',
    imageAlt: 'Woman noticing hair shedding, representing concerns about hair fall',
    whatTitle: 'Understanding Hair Fall',
    what: 'Hair shedding can be temporary or persistent. Recent illness, stress, nutritional or hormonal changes, scalp conditions and hereditary patterns are among the possible causes. The right next step depends on a clinical assessment—not a one-size-fits-all procedure.',
    signs: [
      ['More shedding than usual', 'Hair collecting on a pillow, brush or during washing.'],
      ['A change in density', 'The scalp may look more visible through the hair.'],
      ['A recent trigger', 'Shedding can follow illness, stress, medication or other changes.'],
      ['Scalp symptoms', 'Itching, scaling, pain or redness may need separate evaluation.']
    ],
    steps: [
      ['Clinical assessment', 'Discuss when shedding began, health history, medicines and scalp symptoms.'],
      ['Scalp examination', 'A dermatologist may examine the scalp and hair roots; tests are considered when appropriate.'],
      ['Personalised plan', 'Care may include treating an underlying cause, medicines or selected in-clinic options.'],
      ['Review and follow-up', 'Progress is reviewed over time and the plan adjusted to your response.']
    ],
    noteTitle: 'Is Growth Factor Therapy right for everyone?',
    note: 'No single treatment suits every cause of hair fall. Growth Factor Therapy (GFT) may be discussed for selected patients after assessment; it does not replace diagnosis or guarantee regrowth.',
    faqs: [
      ['What can cause increased hair fall?', 'Common contributors include recent illness, stress, nutritional or hormonal changes, medicines, scalp conditions and hereditary hair loss. A dermatologist can help identify which may apply.'],
      ['Do I need tests for hair fall?', 'Not everyone needs laboratory tests. A clinician may recommend tests based on your history, examination and suspected causes.'],
      ['Will hair fall treatment stop shedding immediately?', 'The timeline depends on the cause and treatment. Improvement is not immediate for everyone, and follow-up may be needed to assess response.'],
      ['When should I see a dermatologist?', 'Arrange an assessment for persistent or sudden shedding, patchy loss, scalp discomfort, or hair loss with other new symptoms.']
    ]
  },
  'hair-thinning-treatment': {
    path: '/hair-thinning-treatment/',
    eyebrow: 'HAIR THINNING CARE IN SOUTH BENGALURU',
    headline: 'Hair Thinning Treatment in Bengaluru',
    intro: 'A wider part, reduced ponytail volume or gradually finer strands can have different causes. Dermatologist-led evaluation helps distinguish them and guide appropriate care.',
    imageAlt: 'Close view of a hair part, illustrating a hair thinning concern',
    whatTitle: 'Understanding Hair Thinning',
    what: 'Hair thinning describes a gradual reduction in hair density or strand diameter. Pattern hair loss is one possible cause, but shedding, scalp disorders, medicines and other health factors can also contribute.',
    signs: [
      ['A widening part', 'The scalp may become more noticeable along the parting.'],
      ['Reduced overall volume', 'A ponytail may feel smaller or hair may look less dense.'],
      ['Finer strands', 'Individual hairs may gradually appear thinner.'],
      ['Gradual change', 'The change often develops over months rather than overnight.']
    ],
    steps: [
      ['History and goals', 'Discuss the timeline, family history, health changes and your concerns.'],
      ['Scalp and hair review', 'Examination, including trichoscopy when appropriate, can help assess density and follicles.'],
      ['Options explained', 'A clinician may discuss medicines, scalp care or selected procedures based on diagnosis.'],
      ['Monitor response', 'Hair changes take time; follow-up helps review progress and tolerability.']
    ],
    noteTitle: 'Treatment depends on the cause',
    note: 'Hair-growth medicines and procedures are not suitable for everyone. A dermatologist should explain expected benefits, possible risks and alternatives before treatment.',
    faqs: [
      ['Is hair thinning the same as hair fall?', 'Not always. Hair fall describes shedding; thinning describes lower density or finer strands. They can occur together but may have different causes.'],
      ['Can hair thinning be reversed?', 'Some causes may improve with appropriate treatment, while others need ongoing management. Results vary and cannot be guaranteed.'],
      ['Does every patient need GFT or injections?', 'No. In-clinic procedures are only considered when appropriate for the diagnosis and individual circumstances.'],
      ['How long does it take to assess progress?', 'Hair grows slowly, so review usually takes place over months. Your dermatologist will recommend a suitable follow-up schedule.']
    ]
  },
  'unwanted-facial-hair-treatment': {
    path: '/unwanted-facial-hair-treatment/',
    eyebrow: 'FACIAL HAIR REDUCTION IN SOUTH BENGALURU',
    headline: 'Unwanted Facial Hair Treatment in Bengaluru',
    intro: 'Explore dermatologist-guided options for unwanted facial hair, including laser hair reduction when suitable. Treatment choice depends on hair colour, skin type and possible underlying causes.',
    imageAlt: 'Dermatology laser handpiece used for facial hair reduction',
    whatTitle: 'Understanding Unwanted Facial Hair',
    what: 'Coarse facial hair can be a normal individual variation or relate to hormonal factors. A clinician can assess the pattern and discuss whether laser hair reduction, medical evaluation or another option is appropriate.',
    signs: [
      ['Chin or upper-lip hair', 'A common concern for people seeking facial hair reduction.'],
      ['Coarse or dark hair', 'Laser response depends in part on hair pigment and the device used.'],
      ['Recurring growth', 'Hair reduction generally takes multiple sessions and results vary.'],
      ['Sudden change', 'Rapid new growth or other hormonal symptoms should be assessed medically.']
    ],
    steps: [
      ['Consultation', 'Review your goals, skin and hair characteristics, medical history and medicines.'],
      ['Suitability check', 'The clinician explains expected response, precautions and alternatives.'],
      ['Treatment plan', 'If suitable, sessions are scheduled according to hair-growth cycles and clinical advice.'],
      ['Review and maintenance', 'Response varies; follow-up or maintenance may be recommended.']
    ],
    noteTitle: 'Laser reduces hair; it may not remove every hair permanently',
    note: 'Laser works best on selected pigmented hairs. It is generally less effective on white, grey or very light hair. Multiple sessions and occasional maintenance may be needed; outcomes vary by person and treatment area.',
    faqs: [
      ['Is laser hair reduction suitable for every skin and hair type?', 'No. Suitability depends on skin tone, hair colour, medical history and the device. A clinician should assess you before treatment.'],
      ['How many sessions will I need?', 'There is no fixed number for everyone. Hair-growth cycles, treatment area and individual response affect the schedule.'],
      ['Can laser treat white or grey facial hair?', 'Laser relies on pigment in the hair and may have limited effect on white, grey or very light hair. Other options can be discussed during consultation.'],
      ['Should I seek assessment for sudden facial hair growth?', 'Yes. Rapid new growth or facial hair accompanied by other hormonal symptoms should be discussed with a clinician.']
    ]
  }
};

const TRUST_POINTS = [
  'Dermatologist-led assessment',
  'Treatment plan based on diagnosis',
  'Options and risks explained',
  'Near Yelachenahalli Metro'
];

export default function HairConcernLandingPage({ item, onOpenBooking, onBack }) {
  const [openFaq, setOpenFaq] = useState(0);
  const content = LANDING_CONTENT[item?.id];

  if (!content) return null;

  const description = `${content.headline}. Doctor-led assessment and personalised care at Medicare Skin, near Yelachenahalli Metro, Bengaluru.`;
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: content.headline,
    description,
    url: `https://www.medicareskin.com${content.path}`,
    about: {
      '@type': 'MedicalCondition',
      name: item.title
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: content.faqs.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer }
      }))
    }
  };

  return (
    <main className="hair-landing">
      <SEOHead
        title={content.headline}
        description={description}
        canonicalUrl={`https://www.medicareskin.com${content.path}`}
        ogImage={`https://www.medicareskin.com${item.image}`}
        schemaData={schemaData}
      />

      <section className="hair-landing-hero">
        <div className="container hair-landing-hero-grid">
          <div className="hair-landing-copy">
            <button className="hair-landing-back" onClick={onBack} type="button">← Hair treatments</button>
            <span className="hair-landing-eyebrow"><Sparkles size={15} /> {content.eyebrow}</span>
            <h1>{content.headline}</h1>
            <p>{content.intro}</p>
            <div className="hair-landing-actions">
              <button className="hair-landing-primary" onClick={() => onOpenBooking(item.title)} type="button">
                <Calendar size={17} /> Book a Consultation <ArrowRight size={16} />
              </button>
              <a className="hair-landing-call" href={`tel:${CLINIC_INFO.rawPhone}`}>
                <Phone size={17} /> Call {CLINIC_INFO.phone}
              </a>
            </div>
            <p className="hair-landing-disclaimer">Assessment and treatment recommendations are individual. Results vary.</p>
          </div>
          <div className="hair-landing-visual">
            <img src={item.image} alt={content.imageAlt} />
            <div className="hair-landing-doctor">
              <ShieldCheck size={21} />
              <span><strong>Dr. Sujay M</strong><small>Dermatologist · MBBS, DDVL</small></span>
            </div>
          </div>
        </div>
      </section>

      <section className="hair-landing-trust" aria-label="Care highlights">
        <div className="container hair-landing-trust-grid">
          {TRUST_POINTS.map((point) => <div key={point}><CheckCircle2 size={19} />{point}</div>)}
        </div>
      </section>

      <section className="hair-landing-section">
        <div className="container hair-landing-intro-grid">
          <article className="hair-landing-panel">
            <span className="hair-landing-kicker">CLINICAL OVERVIEW</span>
            <h2>{content.whatTitle}</h2>
            <p>{content.what}</p>
            <div className="hair-landing-note"><ShieldCheck size={20} /><span>{content.note}</span></div>
          </article>
          <article className="hair-landing-panel">
            <span className="hair-landing-kicker">WHEN TO SEEK ADVICE</span>
            <h2>Signs worth discussing</h2>
            <div className="hair-landing-signs">
              {content.signs.map(([title, detail]) => (
                <div key={title}><CheckCircle2 size={18} /><span><strong>{title}</strong><small>{detail}</small></span></div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="hair-landing-section hair-landing-tinted">
        <div className="container">
          <div className="hair-landing-section-heading">
            <span className="hair-landing-kicker">YOUR CARE JOURNEY</span>
            <h2>A clear, step-by-step approach</h2>
          </div>
          <div className="hair-landing-steps">
            {content.steps.map(([title, detail], index) => (
              <article className="hair-landing-step" key={title}>
                <span className="hair-landing-step-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hair-landing-section">
        <div className="container hair-landing-faq-grid">
          <div>
            <span className="hair-landing-kicker">PERSONALISED DERMATOLOGY CARE</span>
            <h2>{content.noteTitle}</h2>
            <p>{content.note}</p>
            <div className="hair-landing-location"><MapPin size={18} /> Medicare Skin · Near Yelachenahalli Metro, Bengaluru</div>
          </div>
          <div className="hair-landing-faqs">
            <h2>Frequently asked questions</h2>
            {content.faqs.map(([question, answer], index) => (
              <article className="hair-landing-faq" key={question}>
                <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                  {question}<ChevronDown size={17} />
                </button>
                {openFaq === index && <p>{answer}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hair-landing-bottom">
        <div className="container hair-landing-bottom-inner">
          <div><span className="hair-landing-kicker">MEDICARE SKIN · SOUTH BENGALURU</span><h2>Start with a dermatologist consultation</h2><p>Discuss your concern and get guidance on suitable next steps.</p></div>
          <button className="hair-landing-primary" onClick={() => onOpenBooking(item.title)} type="button"><Calendar size={17} /> Request an Appointment <ArrowRight size={16} /></button>
        </div>
      </section>
    </main>
  );
}
