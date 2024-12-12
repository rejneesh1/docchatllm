# Angular UI with Backend Integration (Demo using Browser Storage)

This project is a simple Angular-based web application designed to demonstrate basic user interactions and administrative functionalities. It is prepared to integrate with a backend system in the future but currently uses browser storage for demonstration purposes.

## Features

### 1. **User Management**
- **Register Users**: New users can create an account.
- **Login Users**: Existing users can log in using their credentials.

### 2. **Pages Overview**
- **Welcome Page**: A warm greeting for logged-in users.
- **About Page**: Learn more about the purpose and features of the application.
- **LLM Chat Window**: An interactive chat interface leveraging a Language Learning Model (LLM) to assist users.

### 3. **Admin Dashboard**
- **Document Upload**: Admins can upload important documents.
- **View Documents**: Admins can view the list of uploaded documents.
- **Delete Documents**: Admins can manage the repository by deleting unnecessary documents.

### Admin Credentials
- **Email**: `admin@x.com`
- **Password**: `admin123`

## Screenshots

### Register Page
![Register Page](https://github.com/user-attachments/assets/0170459c-fe07-4058-a7fb-5b23cb89a167)

### Login Page
![Login Page](https://github.com/user-attachments/assets/597fb7bd-773e-4882-945b-e714d0ae4904)

### Welcome Page
![Welcome Page](https://github.com/user-attachments/assets/7f027079-11c3-4cfd-a97d-9ca358b3f1c5)

### LLM Chat Window
![LLM Chat Window](https://github.com/user-attachments/assets/8b9edb82-da44-4897-b6c9-496886e4857e)

### Admin Dashboard
![Admin Dashboard](https://github.com/user-attachments/assets/8b9edb82-da44-4897-b6c9-496886e4857e)

## Tech Stack
- **Frontend**: Angular (with Material UI components for a modern look and feel)
- **Storage**: Browser Storage (for demo purposes; ready for backend integration)

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/rejneesh1/docchatllm.git
   ```

2. Navigate to the project directory:
   ```bash
   cd docchatllm
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   ng serve
   ```

5. Open the application in your browser:
   ```
   http://localhost:4200
   ```

## Future Enhancements
- Integration with a backend for secure and scalable user authentication and document management.
- Enhanced LLM chat functionalities with advanced AI capabilities.
- Role-based access control.

## Contributing
Feel free to fork this repository and submit pull requests. Contributions are welcome!

## License
This project is open-source and available under the [MIT License](LICENSE).
