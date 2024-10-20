import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';
import { TypeSport } from 'src/type-sports/schemas/type-sport.schemas';

export type FieldsDocument = HydratedDocument<Field>;
@Schema()
export class Field {
  @Prop({ type: Number, required: true })
  capacity: number;

  @Prop({ type: SchemaTypes.ObjectId,
    ref: "TypeSport",
    required: true, })
    type: TypeSport | Types.ObjectId

  @Prop({ type: String, required: true })
  status: string;
}
export const FieldSchema = SchemaFactory.createForClass(Field);
FieldSchema.index({ field: 1, type: 1 }, { unique: true });

FieldSchema.set('toJSON', { flattenObjectIds: true, versionKey: false });
FieldSchema.set('toObject', { flattenObjectIds: true, versionKey: false });
