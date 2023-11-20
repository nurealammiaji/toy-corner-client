import { Helmet } from "react-helmet";

const DynamicTitle = ({ title }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title} - Toy Corner</title>
            <meta name="keywords" content="Toy, Toy Corner, Best Toy, Low Price Toy, Trendy toy, New Toy, Child Friendly toy, Nure Alam Miaji, nurealammiaji"></meta>
            <meta name="description" content="Toys Website" />
            <meta name="author" content="Nure Alam Miaji"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Helmet>
    );
};

export default DynamicTitle;