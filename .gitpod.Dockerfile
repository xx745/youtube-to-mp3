FROM gitpod/workspace-full

RUN yarn global add nodemon

ENV PATH="$(yarn global bin):$PATH"