# WIP

WIP or Work In Progress is an open-source web platform for project management.

## Features

The platform can be self-hosted for data privacy supporting serverless deployment on Cloudflare. It offers the following features:

- Kanban board to visual project progress.
- Share project's progress between a team of users.
- Realtime messaging between team members.

## Requirements

- A project has a team with one owner and zero-to-many viewers.
- A project has a Kanban board with tasks, a list of team members and a chat interface.
- An owner can create projects add/edit/move tasks on a Kanban board.
- An owner can invite viewers per-project and share the board with read-only access.
- An owner can reject viewers per-project and revoke board sharing.
- User can chat with other users per-project in realtime on the project messaging channel with one-to-many messages.
- The chat channel supports only text messaging.

## Models

- User
  - name
  - email
  - photo
  - projects (relation)
  - teams (relation)
  - messages (relation)
- Project
  - name
  - description
  - createdAt
  - updatedAt
  - owner (relation)
  - issues (relation)
  - team (relation)
- Team
  - project
  - users
  - channel
  - messages
- Issue
  - column
  - summary
  - description
  - createdAt
  - updatedAt
  - project (relation)
- Message
  - content
  - createdAt
  - author
  - team (relation)
