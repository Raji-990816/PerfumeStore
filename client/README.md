# PerfumeStore-Ecommerce-ReactApp


## Description
Perfume Store is an e-commerce application that allows users to browse a curated collection of perfumes, log in, register, and manage their shopping cart. This app includes basic form validation, authentication, and cart management.


## Features Implemented

### 1. **Registration Form**
   - **Fields**: Name, Email, Password.
   - **Basic validation with fromik & yup**: Ensures fields are filled and email format is correct.

### 2. **Login Form**
   - **Fields**: Email, Password.
   - **Basic validation with fromik & yup**: Ensures fields are filled and email format is correct.

### 3. **Authentication State**
   - Manages user authentication state using **React Context**.
   - Provides feedback for successful login or registration (e.g., success or error messages).

### 4. **Product List Features**
   - **Display Products**: A hardcoded list of products is shown with details like name, price, description, and image.

### 5. **Shopping Cart Features**
   - **Add to Cart**: Adds items to the shopping cart.
   - **View Cart**: Displays items in the cart with their quantity, individual prices, and total price.
   - **Update Quantity**: Allows users to increase or decrease the quantity of items in the cart.
   - **Remove from Cart**: Allows users to remove items from the cart.
   - **Total Cost**: Displays the total cost of items in the cart.

### 6. **UI/UX Considerations**
   - Designed with a **clean and modern UI** for forms, product lists, and shopping cart.
   - **Basic error handling** and validation feedback for forms and actions.

### 7. **Bonus Features (Optional but recommended)**
   - **Client-Side Routing**: Uses **React Router** for navigation between login/register, product list, and cart pages.
   - **Search and Filter Products**: Allows users to filter products by name, price, or category.


## Technologies Used
- **Frontend**: React, Tailwind CSS


### How to Run the Application Locally After Cloning It from GitHub

1. **Clone the repository** to your local machine:
   
   ```bash
   git clone https://github.com/your-username/Perfume-Store.git

2. **Navigate** to the project directory:

   ```bash
    cd Perfume-Store

3. Install the dependencies by running the following command:

   ```bash
    npm install

4. Start the application with:

   ```bash
    npm start


## Usage
1. Register/Login: Login with (user@example.com and password)

2. Browse Products: Use collections and browser fragrances and add to the cart.

3. Checkout: Once you're ready to purchase, proceed to cart page.

4. Browser Pages: Can navigate through the pages using navbar and homepage.


## Future Work

- **Responsiveness**: Enhance the responsiveness for tablets and mobile devices. Ensure the application is fully functional and visually appealing on various screen sizes.
- **Local Storage**: Implement local storage to persist the shopping cart and user authentication state across page reloads, so users do not lose their data when refreshing or reopening the application.
- **Advanced Features**: Explore adding features like user profiles, order history, and more personalized shopping experiences.

## License
This project is licensed under the MIT License.


## Contact
For any inquiries or support, please contact me at pgranuruddha@gmail.com

---
