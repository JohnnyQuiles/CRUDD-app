const User = require('../model/User');
// const jwt = require('jsonwebtoken');

const getCurrentUser = async (req, res) => {
    const { id } = req.params;
    try {
        let foundUser = await User.findById(id);
        console.log("FOUND USER:", foundUser);
        res.status(200).json({ message: 'Current user found:', payload: foundUser });
    } catch (error) {
        res.status(500).json({ message: 'error:', error: error.message });
        console.log('ERROR:', error);
    }
};
const createUser = async (req, res) => {
    try {
        const { id, name, age, favoriteMovies } = req.body;

        let newUser = new User({
            id: id,
            name: name,
            age: age,
            favoriteMovies: favoriteMovies
        });

        let savedUser = await newUser.save();
        res.status(200).json({ message: 'New user created successfully', payload: savedUser });
    } catch (error) {
        res.status(500).json({ message: 'error', error: error.message });
    }
};
const getAllUsers = async (req, res) => {
    try {
        let allUsers = await User.find();
        res.status(200).json({ payload: allUsers });
    } catch (error) {
        res.status(500).json({ error });
        console.log("ERROR:", error);
    }
};
const updatedUser = async (req, res) => {
    try {
        const { id } = req.params;
        let updateUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (updateUser === null) {
            throw new Error('No movie of that id was found!');
        }
        res.status(200).json({ message: 'User updated successfully', payload: updateUser });
    } catch (error) {
        res.status(500).json({ message: "error", error: error.message });
    }
};
const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params;
        let deleteOneUser = await User.findByIdAndDelete(id);
        if(deleteOneUser === null) {
            throw new Error('No user of that id was found!');
        }
        res.status(200).json({ message: 'User deleted successfully', payload: deleteOneUser})
    } catch (error) {
        res.status(500).json({ message: "There's an error", error: error.message});
    }
};

module.exports = {
    createUser,
    getCurrentUser,
    getAllUsers,
    updatedUser,
    deleteUserById
};