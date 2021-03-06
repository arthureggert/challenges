const rejects = {
  reasons: [{
    name: 'NOT_AVAILABLE',
    label: "I'm not available",
    labelDe: 'Keine Zeit',
    needsComment: false,
    subReasons: [],
  },
  {
    name: 'JOB_NOT_SUITABLE_DISTANCE',
    label: 'Job is too far',
    labelDe: 'Zu weit weg',
    needsComment: false,
    subReasons: [],
  },
  {
    name: 'JOB_NOT_SUITABLE_COMPANY',
    label: "I don't like the company",
    labelDe: 'Ich mag das Unternehmen nicht',
    needsComment: false,
    subReasons: [],
  },
  {
    name: 'JOB_NOT_SUITABLE_CATEGORY',
    label: "I don't like these kind of jobs",
    labelDe: 'Mir liegen solche Aufgaben nicht',
    needsComment: false,
    subReasons: [],
  },
  {
    name: 'JOB_NOT_SUITABLE_SPECIAL_REQUIREMENTS',
    label: "I don't fulfill the special requirements",
    labelDe: 'Erfülle Anforderungen nicht',
    needsComment: false,
    subReasons: [],
  },
  {
    name: 'OTHER',
    label: 'Other reason',
    labelDe: 'Sonstiges',
    needsComment: true,
    subReasons: [],
  },
  ],
};

export default rejects;