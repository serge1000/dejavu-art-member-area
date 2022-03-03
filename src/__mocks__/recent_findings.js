import { v4 as uuid } from 'uuid';

export const recent_findings = [
    {
      id: uuid(),
      original: '/static/images/recent_findings/1.jpg',
      simularity1: '/static/images/recent_findings/2.jpg',
      simularity2: '/static/images/recent_findings/6.jpg',
      simularity3: '/static/images/recent_findings/8.jpg'
    },
    {
        id: uuid(),
        original: '/static/images/recent_findings/7.jpg',
        simularity1: '/static/images/recent_findings/3.jpg',
        simularity2: '/static/images/recent_findings/empty.jpg',
        simularity3: '/static/images/recent_findings/empty.jpg'
    },
    {
        id: uuid(),
        original: '/static/images/recent_findings/1.jpg',
        simularity1: '/static/images/recent_findings/2.jpg',
        simularity2: '/static/images/recent_findings/6.jpg',
        simularity3: '/static/images/recent_findings/8.jpg'
      },
      {
          id: uuid(),
          original: '/static/images/recent_findings/7.jpg',
          simularity1: '/static/images/recent_findings/3.jpg',
          simularity2: '/static/images/recent_findings/empty.jpg',
          simularity3: '/static/images/recent_findings/empty.jpg'
      }
]