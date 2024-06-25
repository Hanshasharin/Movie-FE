import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack
} from "@chakra-ui/react";

const SearchResults = () => {
  const location = useLocation();
  const { searchResults } = location.state || {};

  return (
    <main>
      <h1>Search Results</h1>
      <div className="m-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((movie, index) => (
            <div key={index}>
              <Card
                direction="column"
                overflow="hidden"
                variant="outline"
                width="12rem"
                height="18rem"
                position="relative"
              >
                <Image
                  objectFit="cover"
                  width="100%"
                  height="13rem"
                  src={movie.image}
                  alt="Movie Poster"
                />
                <Stack>
                  <CardBody py="-5">
                    <Heading size={movie.title.length > 10 ? "sm" : "md"}>
                      {movie.title}
                    </Heading>
                  </CardBody>
                </Stack>
              </Card>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </main>
  );
};

export default SearchResults;
