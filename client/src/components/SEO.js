import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

function SEO({
    lang,
    title,
    description,
    keywords,
    meta,
    author,
    canonicalUrl,
    robots,
}) {
    return (
        <Helmet
            htmlAtrributes={{ lang }}
            title={title}
            meta={[
                {
                    name: `description`,
                    content: description,
                },
                {
                    name: `keywords`,
                    content: keywords,
                },
                {
                    name: `robots`,
                    content: robots,
                },
                {
                    name: `image`,
                    content:
                        "https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/me-low-quality.png",
                },
                {
                    name: `canonicalUrl`,
                    content: canonicalUrl,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:image`,
                    content:
                        "https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/me-low-quality.png",
                },
                {
                    property: `og:description`,
                    content: description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: description,
                },
            ].concat(meta)}
        />
    );
}

SEO.defaultProps = {
    lang: "nl-NL",
    title: "Michal Antczak professineel websites.",
    description:
        "Michal Antczak uw partner in online marketing. Maak uw bedrijf zichtbaar door goed ontworpen website te bouwen en uw merk online te promoten.",
    meta: [],
};

SEO.propTypes = {
    lang: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
};

export default SEO;
