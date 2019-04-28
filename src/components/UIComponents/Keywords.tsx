import * as React from "react";
import { Movie } from "../../type/Movie";

const Keywords: React.FC<{ keywords: Movie["keywords"] }> = ({ keywords }) => (
  <div>
    <div className="heading">Keywords</div>
    <div className="keywords">
      {keywords.map(k => (
        <span key={k.id}>{k.name}</span>
      ))}
    </div>
  </div>
);

export default Keywords;
