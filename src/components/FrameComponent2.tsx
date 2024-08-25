import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.statsContentParent, className].join(" ")}>
      <div className={styles.statsContent}>
        <img
          className={styles.photo1Icon}
          loading="lazy"
          alt=""
          src="/photo1@2x.png"
        />
        <div className={styles.statsNumbers}>
          <div className={styles.expertiseDescription}>
            <h1 className={styles.weAreExpertise}>
              We are expertise to craft stunning spaces
            </h1>
            <div className={styles.weHaveMore}>
              We have more than a decade of experience to handle projects. Our
              teams will help you to transforming your idea into stunning space.
              Our mission is to create spaces that not only inspire but also
              enhance the lives of those who experience them.
            </div>
          </div>
          <div className={styles.statsDetails}>
            <div className={styles.yearsExperience}>
              <p className={styles.p}>10 +</p>
            </div>
            <div className={styles.yearsExperience}>
              <p className={styles.p}>120 +</p>
            </div>
            <div className={styles.yearsExperience}>
              <p className={styles.p}>150+</p>
            </div>
          </div>
          <div className={styles.statsDetails1}>
            <div className={styles.yearsOfExperienceContainer}>
              <p className={styles.p}>Years of experience handling projects</p>
            </div>
            <div className={styles.happyCustomersWithContainer}>
              <p className={styles.p}>Happy customers with our services</p>
            </div>
            <div className={styles.yearsOfExperienceContainer}>
              <p
                className={styles.masterpieceProjectsBuilt}
              >{`Masterpiece projects built   `}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.servicesContentWrapper}>
        <div className={styles.servicesContent}>
          <div className={styles.servicesGrid}>
            <div className={styles.ourServicesParent}>
              <h1 className={styles.weAreExpertise}>Our Services</h1>
              <div className={styles.servicesOptions}>
                <div className={styles.serviceOptionsGrid}>
                  <div className={styles.alraidEtudeAcademy}>
                    <img
                      className={styles.alraidEtudeAcademyChild}
                      loading="lazy"
                      alt=""
                      src="/group-9.svg"
                    />
                    <img
                      className={styles.alraidEtudeAcademyChild}
                      loading="lazy"
                      alt=""
                      src="/group-12.svg"
                    />
                  </div>
                  <div className={styles.etudeAcademyDescriptions}>
                    <div className={styles.etudeAcademyDetails}>
                      <h3 className={styles.alraidEtude}>ALRAID ETUDE</h3>
                      <div className={styles.makeYourDreams}>
                        Make your dreams come true with our talented architects
                        and home designers
                      </div>
                    </div>
                    <div className={styles.etudeAcademyDetails1}>
                      <h3 className={styles.alraidEtude}>ALRAID ACADEMY</h3>
                      <div className={styles.expandYourKnowledge}>
                        Expand your knowledge by learning from the best
                        instructors out there
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.alraidFreelanceMarketplace}>
                  <div className={styles.freelanceMarketplaceGrid}>
                    <div className={styles.freelanceMarketplaceItems}>
                      <div className={styles.freelanceGridItem}>
                        <img
                          className={styles.freelanceGridItemChild}
                          loading="lazy"
                          alt=""
                          src="/group-11.svg"
                        />
                      </div>
                      <img
                        className={styles.alraidEtudeAcademyChild}
                        loading="lazy"
                        alt=""
                        src="/group-10.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.freelanceDescription}>
                    <div className={styles.freelanceContent}>
                      <div className={styles.alraidFreelanceParent}>
                        <h3 className={styles.alraidEtude}>ALRAID FREELANCE</h3>
                        <div className={styles.makeYourDreams}>
                          Discover talented freelancers that can help you with
                          your dream projects
                        </div>
                      </div>
                    </div>
                    <div className={styles.marketplaceDescription}>
                      <h3 className={styles.alraidMarketplace}>
                        ALRAID MARKETPLACE
                      </h3>
                      <div className={styles.makeYourDreams}>
                        Explore the variety of construction materials through
                        our trusted sellers network
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.footerContent}>
              <img
                className={styles.footerContentChild}
                loading="lazy"
                alt=""
                src="/group-13@2x.png"
              />
              <img
                className={styles.footerLinksIcon}
                loading="lazy"
                alt=""
                src="/frame-14305@2x.png"
              />
            </div>
            <img
              className={styles.copyrightIcon}
              loading="lazy"
              alt=""
              src="/frame-14306@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
