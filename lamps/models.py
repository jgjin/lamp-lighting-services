from lamps import db

from sqlalchemy import BigInteger, String
from sqlalchemy.dialects import sqlite


from sqlalchemy.orm import mapped_column


class Lamp(db.Model):
    # SQLite does not play well with BigInteger primary keys
    id = mapped_column(BigInteger().with_variant(sqlite.INTEGER(), "sqlite"),
                       primary_key=True)

    name = mapped_column(String)
    image_url = mapped_column(String)

    def to_dict(self):
        return {
            key: self.__getattribute__(key)
            for key in self.__table__.columns.keys()
        }
