import OrderService from "../services/OrderService.js";

class OrderController {
    static async createOrder(req, res) {
        try {
            const { name, phone } = req.body;
            const response = await OrderService.sendOrder(name, phone);
            res.json(response);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default OrderController;
