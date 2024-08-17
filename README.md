<a id="readme-top"></a>
<br />
<div align="center">
  <h3 align="center">Priority Todo DApp</h3>
  <p align="center">
    A decentralized application for managing tasks with priority levels, powered by Cartesi Rollups technology.
  </p>
</div>

## Overview

The Priority Todo DApp is a decentralized application that allows users to manage tasks with assigned priority levels. Users can create, update,

and delete tasks directly on the blockchain using Cartesi Rollups.

## Features

- **Create Task**: Users can create a new task with a title and assign a priority level (low, medium, high).
- **Update Task**: Users can update the status of an existing task (pending, completed).
- **Delete Task**: Users can remove a task from the list.
- **View Tasks**: Users can view all tasks along with their priority levels and status.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en)
- [Cartesi CLI](https://docs.cartesi.io/cartesi-rollups/1.3/development/migration/#install-cartesi-cli)
  ```sh
  npm install -g @cartesi/cli
  ```
- [Docker](https://docs.docker.com/get-docker/)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/louis770/Priority-Todo-Dapp.git
   cd Priority-Todo-Dapp
   ```

2. **Install the Dependencies**
   ```bash
   npm install
   ```

3. **Build the Project with Cartesi CLI**
   ```bash
   cartesi build
   ```

4. **Start the dApp with Cartesi CLI**
   ```bash
   cartesi run
   ```

5. **Start the Local Server**
   ```bash
   npm start
   ```

## Usage

1. **Create a Task**
   - Send a transaction with the payload: `create [title] [priority]`.
   - Example: `create "Buy groceries" high`

2. **Update a Task**
   - Send a transaction with the payload: `update [task-id] [status]`.
   - Example: `update owner-0 completed`

3. **Delete a Task**
   - Send a transaction with the payload: `delete [task-id]`.
   - Example: `delete owner-0`

4. **View Tasks**
   - Inspect the state with the payload: `list`.

## License

This project is licensed under the MIT License.

## Contact

Akadi Louis - [akadilouis@gmail.com](mailto:akadilouis@gmail.com) - [GitHub](https://github.com/louis770)

<p align="right">(<a href="#readme-top">back to top</a>)</p>