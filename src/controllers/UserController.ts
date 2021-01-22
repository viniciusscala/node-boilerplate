import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";
import { StationRepository } from "@controllers";

module.exports = {
  async store(req, res) {
    const { name, initials } = req.body;

    const cause = await Cause.create({ name, initials });

    if (!cause) {
      return res.status(500).json({ error: 'Internal server error' });
    }

    return res.json(cause);
  },
};