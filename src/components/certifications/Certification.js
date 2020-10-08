import React from 'react'
import { StyledTableContainer } from './CertificationStyle'
import { Icon } from '../icons/Icon'
import { certifications } from '../../content/certification'

export const Certification = () => {
  return (
    <section id="cert">
      <h2 className="numbered-heading">
        My Recent certifications
      </h2>
      
      <StyledTableContainer>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th className="hide-on-mobile">Organzation</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {certifications.map(({ title, organization, external }, i) => {
              return (
                <tr key={i}>
                  <td className="title">{title}</td>

                  <td className="company hide-on-mobile">
                    {organization ? <span>{organization}</span> : <span>—</span>}
                  </td>

                  <td className="links">
                    <div>
                      {external && (
                        <a href={external} aria-label="External Link">
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </StyledTableContainer>
      
    </section>
  )
}
