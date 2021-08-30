FROM gitpod/workspace-full

# Surge.sh will be installed in /home/gitpod/.yarn/bin
# RUN yarn global add surge @vue/cli

ENV PATH="$(yarn global bin):$PATH"