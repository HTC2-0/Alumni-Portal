import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-200 absolute bottom-0 w-full">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
          {/* Column 1 */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-medium mb-2">Column 1</h3>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              {/* Add more links here */}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-medium mb-2">Column 2</h3>
            <ul>
              <li><a href="#">Link 4</a></li>
              <li><a href="#">Link 5</a></li>
              <li><a href="#">Link 6</a></li>
              {/* Add more links here */}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-medium mb-2">Column 3</h3>
            <ul>
              <li><a href="#">Link 7</a></li>
              <li><a href="#">Link 8</a></li>
              <li><a href="#">Link 9</a></li>
              {/* Add more links here */}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-medium mb-2">Column 4</h3>
            <ul>
              <li><a href="#">Link 10</a></li>
              <li><a href="#">Link 11</a></li>
              <li><a href="#">Link 12</a></li>
              {/* Add more links here */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
