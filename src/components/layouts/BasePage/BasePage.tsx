import React, { useMemo } from 'react';
import NavHeader from '../NavHeader/NavHeader';
import s from './BasePage.module.scss';
import Button from '../../uikit/Button/Button';
import cn from 'classnames';
import Footer from '../Footer/Footer';

interface BasePageProps extends React.PropsWithChildren {
  variant?: 'primary' | 'secondary' | 'tertiary';
  bgImageUrl?: string;
  className?: string;
  customIntro?: React.ReactNode;
  contentClassname?: string;
}

const BasePage: React.FC<BasePageProps> = ({
  children,
  variant = 'primary',
  bgImageUrl,
  className,
  customIntro,
  contentClassname,
}) => {
  const styles = useMemo(() => {
    if (!bgImageUrl) return undefined;

    return {
      '--background': `url(${bgImageUrl})`,
    } as React.CSSProperties;
  }, [bgImageUrl]);

  const classNames = cn(s.basePage__intro, className, {
    [s.basePage__intro_primary]: variant === 'primary',
    [s.basePage__intro_secondary]: variant === 'secondary',
    [s.basePage__intro_tertiary]: variant === 'tertiary',
  });

  const contentClasses = cn(s.basePage__content, contentClassname);

  return (
    <div className={s.basePage}>
      <div className={classNames} style={styles}>
        <NavHeader />
        {variant !== 'tertiary' && (
          <div className={s.basePage__introContent}>
            {customIntro || (
              <>
                <div className={s.welcome}>WELCOME TO</div>
                <div className={s.title}>LUXURY</div>
                <div className={s.secondTitle}>HOTELS</div>
                <div className={s.book}>
                  Book your stay and enjoy Luxury <br />
                  redefined at the most affordable rates.
                </div>

                <div className={s.buttonBlock}>
                  <Button>BOOK NOW</Button>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <section className={contentClasses}>{children}</section>
      <Footer />
    </div>
  );
};

export default BasePage;
