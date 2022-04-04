import React from 'react';
import "./Blogs.css";

const Blocks = () => {
    return (
        <div className='blogs-container'>
            <h1 className='blogs-title'>Question & Answer</h1>
            <h2>What is Semantic Tag in Html?</h2>
            <p>A semantic element in reality describes its meaning to each the browser and the developer.Semantic HTML elements are those who truely describe their that means in a human- and gadget-readable manner.Elements together with header, footer and article are all considered semantic because they accurately describe the motive of the element and the sort of content material that is internal them.The advantage of writing semantic HTML stems from what need to be the using goal of any net web page: the desire to talk. By including semantic tags on your document, you offer extra records approximately that report, which aids in conversation. Specifically, semantic tags make it clean to the browser what the meaning of a page and its content is. That clarity is likewise communicated with search engines like google and yahoo, making sure that the proper pages are brought for the right queries.</p>

            <h2>What is Context API?</h2>
            <p>The React Context API is a manner for a React app to successfully produce international variables that can be exceeded around. This is the alternative to "prop drilling" or shifting props from grandparent to baby to figure, and so forth. Context is also touted as an less complicated, lighter technique to nation management the usage of Redux.React.CreateContext() is all you want. It returns a purchaser and a issuer. Provider is a component that as it's names indicates offers the state to its kids. It will keep the "shop" and be the discern of all the additives that might need that save. Consumer as it so takes place is a part that consumes and makes use of the nation.To keep context re-rendering fast, React needs to make each context consumer a separate node in the tree.</p>
        </div>
    );
};

export default Blocks;