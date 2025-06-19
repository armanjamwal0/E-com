# ─── Helpers ────────────────────────────────────────────────────────────────── #
def user_schema(u):            # tiny serializer
    return {"id": u.id,"name": u.name, "email": u.email}