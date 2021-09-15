export async function useService(service, functionName, params) {
  try {
    let functionReturn = await service[functionName](...params);
    return functionReturn;
  } catch (error) {
    return { error: error.message };
  }
}
