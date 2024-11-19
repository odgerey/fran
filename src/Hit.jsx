import { Highlight } from "react-instantsearch";
import { getPropertyByPath } from 'instantsearch.js/es/lib/utils';

export const Hit = ({ hit }) => {
  return (
    <article>
      <div className="hit-path">
			  <Highlight attribute="path" hit={hit} />
			</div>
			<div className="hit-content">
			  <Highlight attribute="content" hit={hit} />
			</div>
			<div className="hit-title">
			  <Highlight attribute="title" hit={hit} />
			</div>
    </article>
  );
};