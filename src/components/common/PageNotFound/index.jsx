import React from 'react';
import { Link } from 'react-router-dom';

import { ErrorIcon } from '../svgs/ErrorIcon';

export function PageNotFound() {
  return (
    <div
      className="d-flex flex-column bg-white align-items-center justify-content-center"
      style={{ width: '100%', height: '100%', paddingTop: '50px' }}
    >
      <div>
        <ErrorIcon />
      </div>
      <div style={{ fontWeight: '600', fontSize: '24px' }}>
        404 Page Not Found
      </div>
      <div
        className="align-items-center justify-content-center p-2"
        style={{
          fontWeight: '400',
          fontSize: '16px',
          width: '691px',
          textAlign: 'center',
        }}
      >
        {' '}
        Oops! Something has gone wrong and the page you were looking for could
        not be displayed. Try{' '}
        <Link style={{ color: '#188AA8' }} to="/">
          the homepage
        </Link>
        .
        <div className="pt-3">
          {' '}
          <div>
            Please contact{' '}
            <a
              style={{ color: '#188AA8' }}
              href="https://cimpress-support.atlassian.net/jira/servicedesk/projects/JPTRS/queues/custom/2808"
              target="_blank"
              rel="noreferrer"
            >
              Jupiter Squad
            </a>{' '}
            in case of any queries.
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
