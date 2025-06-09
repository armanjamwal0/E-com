# ─── Helpers ────────────────────────────────────────────────────────────────── #
def user_schema(u):            # tiny serializer
    return {"id": u.id, "email": u.email}