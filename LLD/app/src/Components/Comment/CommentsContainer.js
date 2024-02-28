import React from "react";
import CommentBox from "./CommentBox";

const data = [
  {
    username: "Pankaj kumar",
    comment: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [
      {
        username: "Virat Kohali",
        comment:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo tenetur?",
        replies: [
          {
            username: "Einstein",
            comment:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo tenetur nemo?",
          },
        ],
      },
    ],
  },
  {
    username: "Einstein",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo tenetur nemo, cumque?",
    replies: [
      {
        username: "Einstein",
        comment:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo tenetur nemo, cumque?",
        replies: [
          {
            username: "Einstein",
            comment: `Recursion is fun!`,
            replies: [
              {
                username: "Einstein",
                comment:
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo tenetur nemo, cumque?",
                replies: [
                  {
                    username: "Einstein",
                    comment:
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo tenetur nemo, cumque?",
                    replies: [
                      {
                        username: "Virat Kohali",
                        comment:
                          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo tenetur?",

                        replies: [
                          {
                            username: "Einstein",
                            comment:
                              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo tenetur nemo, cumque?",
                            replies: [
                              {
                                username: "Einstein",
                                comment:
                                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo tenetur nemo, cumque?",
                                replies: [
                                  {
                                    username: "Virat Kohali",
                                    comment:
                                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo tenetur?",
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        username: "Einstein",
        comment:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo tenetur nemo, cumque?",
      },
      {
        username: "Einstein",
        comment:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo tenetur nemo, cumque?",
        replies: [
          {
            username: "Einstein",
            comment:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo tenetur nemo, cumque?",
          },
        ],
      },
      {
        username: "Einstein",
        comment:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo tenetur nemo, cumque?",
      },
    ],
  },
  {
    username: "Virat Kohali",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo tenetur?",
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-8">
      <CommentBox data={data} />
    </div>
  );
};

export default CommentsContainer;
