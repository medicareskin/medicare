'use client';
import Link from 'next/link';
import {useState} from 'react';

const options = [
  {
    id: 'acne',
    label: 'Acne, pimples or scars',
    href: '/treatments/skin/acne-treatment/',
    note: 'Active acne and acne scars have different treatment approaches.',
  },
  {
    id: 'pigment',
    label: 'Dark patches, melasma or spots',
    href: '/treatments/skin/melasma-treatment/',
    note: 'Diagnosis matters: not all pigmentation is suitable for lasers.',
  },
  {
    id: 'hair',
    label: 'Hair loss or scalp symptoms',
    href: '/treatments/hair/hair-loss-treatment/',
    note: 'Hair loss has several causes and sometimes requires targeted tests.',
  },
  {
    id: 'laser',
    label: 'Unwanted hair or laser questions',
    href: '/treatments/laser/laser-hair-reduction/',
    note: 'Your dermatologist can discuss device choice, risks and suitability.',
  },
  {
    id: 'medical',
    label: 'Rash, itching or a changing mole',
    href: '/treatments/medical-dermatology/eczema/',
    note: 'Skin symptoms and changing lesions deserve medical assessment.',
  },
  {
    id: 'general',
    label: 'Not sure which service I need',
    href: '/book-appointment/',
    note: 'Start with a clinical consultation rather than picking a procedure.',
  },
];

export function ConcernGuide() {
  const [selected, setSelected] = useState(options[0].id);
  const opt = options.find((o) => o.id === selected)!;
  return (
    <div className="guide">
      <fieldset>
        <legend>What is your main concern?</legend>
        <div className="guide-options">
          {options.map((o) => (
            <label
              className={selected === o.id ? 'guide-option selected' : 'guide-option'}
              key={o.id}
            >
              <input
                type="radio"
                name="concern"
                value={o.id}
                checked={selected === o.id}
                onChange={() => setSelected(o.id)}
              />
              {o.label}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="guide-answer" aria-live="polite">
        <p>
          <strong>Suggested next step</strong>
        </p>
        <p>{opt.note}</p>
        <Link href={opt.href} className="btn primary">
          Explore guidance →
        </Link>
        <p className="micro">
          Educational navigation only. No diagnosis or data submission occurs here.
        </p>
      </div>
    </div>
  );
}
