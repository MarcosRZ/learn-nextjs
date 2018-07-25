import React, { PureComponent } from 'react';
import Link from 'next/link';
import Router from './xrouter';
import PropTypes from 'prop-types';

class Xlink extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, href, prefetch, ...otherProps } = this.props;

    try {

      if (href) {
        const selectedRoute = Router.processRoute(href);

        if (!selectedRoute) {
          throw new Error(`No x router match for [${href}]`);
        }

        return (
          <Link
            href={{
              pathname: selectedRoute ? selectedRoute.target : href,
              query: {
                data: selectedRoute
                  ? JSON.stringify(selectedRoute.query)
                  : null,
              },
            }}
            prefetch={prefetch}
            as={selectedRoute.currentUrl || href}
          >
            {typeof children === 'string'
              ? children
              : React.cloneElement(children, {
                  ...otherProps,
                  href: selectedRoute.currentUrl || href,
                })}
          </Link>
        );
      }

      return typeof children === 'string'
        ? children
        : React.cloneElement(children, { ...otherProps, href });
    } catch (err) {

      console.error('X Router error: ', err.message)
      return React.cloneElement(children, { ...otherProps, href: '/es/error' });
    }
  }
}

Xlink.propTypes = {};

export default Xlink;
