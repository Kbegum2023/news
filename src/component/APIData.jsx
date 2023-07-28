import {React, useState, useEffect} from 'react';
import axios from 'axios';
import RandomImages from './RandomImages';
import Loader from './Loader';

const placeholderImageUrl ="https://placehold.co/600x600/jpg"
const APIData = ({query}) => {
    const [articles, setArticles] = useState([]);
    const[term, setTerm]= useState('everything');
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=mFUFVjfgA65icrGlbXIpoQtC8jSwAxNI`);
        console.log(res.data.response.docs);
        setArticles(res.data.response.docs);
        setIsLoading(false); // Data fetched, loading is complete
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set isLoading to false even on error to avoid infinite loader display
      }
    };

    getArticles();
  }, [query]);

    
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <section className="container mx-auto px-4 py-8">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {articles.map((article) => {
              // ... Rest of the article data ...

              const randomImageUrl = RandomImages();

              return (
                <div key={_id} className="aspect-w-3 aspect-h-4 ">
                  <article className="bg-slate-300 p-4 rounded-lg h-full">
                    <img
                      src={randomImageUrl || placeholderImageUrl}
                      alt="Placeholder"
                      className="w-full h-32 object-cover mb-4"
                    />
                    <h2 className="text-xl font-semibold mb-4">{headline.main}</h2>
                    <h4 className="text-base text-gray-700 mb-4">{abstract}</h4>
                    <a
                      className="text-blue-600 underline mb-4 block"
                      href={web_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link to the article
                    </a>
                    <p className="text-gray-800">{lead_paragraph}</p>
                    <ul className="mt-2 text-gray-600">
                      <li>
                        <strong>News Desk:</strong> {news_desk}
                      </li>
                      <li>
                        <strong>Section:</strong> {section_name}
                      </li>
                      <li>
                        <strong>Word Count:</strong> {word_count}
                      </li>
                    </ul>
                  </article>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default APIData;