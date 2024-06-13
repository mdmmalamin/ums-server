import { Student } from '../modules/student/student.model';

const getAllStudentFromDB = async (query: Record<string, unknown>) => {
  // {email: {$regex: query.searchTerm, $options: i}}
  // {name.firstName: {$regex: query.searchTerm, $options: i}}
  const queryObj = { ...query };

  const studentSearchableFields = ['email', 'name.firstName', 'presentAddress'];

  let searchTerm = '';
  query?.searchTerm && (searchTerm = query?.searchTerm as string);

  // 1st phase
  const searchQuery = Student.find({
    $or: studentSearchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  // Filtering
  const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
  excludeFields.forEach((el) => delete queryObj[el]);
  console.log({ BaseQuery: query }, { QueryObj: queryObj });

  const filterQuery = searchQuery
    .find(queryObj) // 2nd phase
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });

  let sort = '-createdAt';
  query?.sort && (sort = query?.sort as string);

  const sortQuery = filterQuery.sort(sort);

  let page = 1;
  let limit = 10;
  let skip = 0;

  query?.limit && (limit = +query?.limit);
  // query?.page && (page = +query?.page)
  query?.page && (skip = (+query?.page - 1) * limit);

  const paginateQuery = sortQuery.skip(skip);

  const limitQuery = paginateQuery.limit(limit);
  // console.log(limitQuery?.map((el) => el.id));

  // field limiting
  let fields = '-__v';
  query?.fields && (fields = (query?.fields as string)?.split(',').join(' '));
  console.log(fields);

  const fieldQuery = await limitQuery.select(fields);

  return fieldQuery;
};
