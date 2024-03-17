"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NextBreadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <div className='my-4'>
      <ul className={containerClasses}>
        <li className={decodeURIComponent(listClasses)}>
          <Link href={'/'}>{homeElement}</Link>
        </li>
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join('/')}`;
          let itemClasses =
            paths === href ? `${decodeURIComponent(listClasses)} ${activeClasses}` : decodeURIComponent(listClasses);
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <React.Fragment key={index}>
              {index !== 0 && ( // Renderizar el separador solo después del primer elemento
                <li className={decodeURIComponent(listClasses)}>
                  <img src="/breadcrum/separador.svg" alt="Separador" />
                </li>
              )}
              <li className={itemClasses}>
                <Link className='flex gap-2' href={href}>
                  {decodeURIComponent(itemLink)}
                </Link>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default NextBreadcrumb;
